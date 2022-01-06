import express, { Router } from "express";
import {createMovie, getMovieById, getAllMovies} from './controller';
import { createPostValidator, titleToUppercase } from "./middleware";

import isLoggedIn from "../general/middlewares/isLoggedIn";

const router: Router = express.Router();

router
    .get('/', getAllMovies)
    .get('/:id', getMovieById)
    .post('/', isLoggedIn, createPostValidator, titleToUppercase, createMovie);

export default router;