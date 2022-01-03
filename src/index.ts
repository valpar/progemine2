import express, { Application } from 'express';

import loggerMiddleware from './components/general/middlewares';
import moviesRouter from './components/movies/routes';
import pingRouter from './components/ping/routes';

const app: Application = express();

const port: number = 3000
 
app.use(express.json());
app.use(loggerMiddleware);
app.get('/ping', pingRouter);
app.use('/movies', moviesRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});