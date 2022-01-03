import express, { Router } from "express";
import {createMovie, getMovieById, getAllMovies} from './controller';
import { createPostValidator, titleToUppercase } from "./middleware";

const router: Router = express.Router();

router
    .get('/', getAllMovies)
    .get('/:id', getMovieById)
    .post('/', createPostValidator, titleToUppercase, createMovie);

export default router;