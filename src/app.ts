import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import openapi from './openapi.json';
import cors from 'cors';

import loggerMiddleware from './components/general/middlewares/middlewares';
import moviesRouter from './components/movies/routes';
import pingRouter from './components/ping/routes';
import usersRouter from './components/users/routes';
import directorsRouter from './components/directors/routes';

import { login } from './components/users/controller';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));

//ping routes
app.get('/ping', pingRouter);
//movies routes
app.use('/movies', moviesRouter);
//users routes
app.use('/users', usersRouter);
//directors routes
app.use('/directors', directorsRouter);

app.post('/login', login);

export default app;