import express, { Router } from "express";
import {createUser, getUsers } from './controller';

import isLoggedIn from "../general/middlewares/isLoggedIn";

const router: Router = express.Router();

router
    .get('/', isLoggedIn, getUsers)
    .post('/', createUser);

export default router;