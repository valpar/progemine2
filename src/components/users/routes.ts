import express, { Router } from "express";
import {createUser, getUsers } from './controller';

const router: Router = express.Router();

router
    .get('/', getUsers)
    .post('/', createUser);

export default router;