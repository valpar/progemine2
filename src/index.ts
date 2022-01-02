import express, { Express } from 'express';

import {createMovie, getMovieById, getAllMovies} from './components/movies/controller';
import pingController from './components/ping/controller';

const app: Express = express();

const port: number = 3000;

app.use(express.json());

app.get('/', pingController);
//route to get all movies
app.get('/movies', getAllMovies); 
//route to get movie by id
app.get('/movies/:id', getMovieById);
//route to create movie
app.post('/movies', createMovie);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});