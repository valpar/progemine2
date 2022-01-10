import express, { Router } from "express";
import {getAllDirectors, getDirectorById, createDirector} from './controller';

import isLoggedIn from "../general/middlewares/isLoggedIn";

const router: Router = express.Router();

router
    .get('/directors', getAllDirectors)
    .get('/directors:id', getDirectorById)
    .post('/directors', isLoggedIn, createDirector);

export default router;