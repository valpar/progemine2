import express, { Application } from 'express';

import {createMovie, getMovieById, getAllMovies} from './components/movies/controller';
import pingController from './components/ping/controller';
import loggerMiddleware from './components/general/middlewares';
import {titleToUppercase, createPostValidator} from './components/movies/middleware';

const app: Application = express();

const port: number = 3000;
 
app.use(express.json());

app.use(loggerMiddleware);

app.get('/ping', pingController);
//route to get all movie names
app.get('/movies', getAllMovies); 
//route to get movie by id
app.get('/movies/:id', getMovieById);
//route to create movie review
app.post('/movies', createPostValidator, titleToUppercase, createMovie);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});