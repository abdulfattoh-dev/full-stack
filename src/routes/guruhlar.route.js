import { Router } from "express";

import { GuruhController } from '../controllers/guruhlar.controller.js';

const router = Router();
const controller = new GuruhController();

router
    .post('/', controller.createGuruh);

export { router as guruhRouter }