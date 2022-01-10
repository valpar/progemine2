import express, { Router } from "express";
import {getAllGenres, getGenreById, createGenre} from './controller';

import isLoggedIn from "../general/middlewares/isLoggedIn";

const router: Router = express.Router();

router
    .get('/´genres', getAllGenres)
    .get('/genres:id', getGenreById)
    .post('/genres', isLoggedIn, createGenre);

export default router;