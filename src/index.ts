import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import openapi from './openapi.json';
import cors from 'cors';

import loggerMiddleware from './components/general/middlewares/middlewares';
import moviesRouter from './components/movies/routes';
import pingRouter from './components/ping/routes';
import usersRouter from './components/users/routes';

import { login } from './components/users/controller';
import isLoggedIn from './components/general/middlewares/isLoggedIn';

const app: Application = express();

const port: number = 3000

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));

//ping routes
app.get('/ping', pingRouter);
//movies routes
app.use('/movies', isLoggedIn, moviesRouter);
//users routes
app.use('/users', usersRouter);

app.post('/login', login);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});