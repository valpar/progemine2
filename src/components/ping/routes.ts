import express, { Router } from "express";
import pingController from './controller';

const router: Router = express.Router();

router
    .get('/ping', pingController)

export default router;