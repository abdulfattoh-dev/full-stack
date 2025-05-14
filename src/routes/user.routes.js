import { Router } from "express";

import { UserController } from '../controllers/user.controller.js';
import { detector } from "../middlewares/deviceDetector.js";

const router = Router();
const controller = new UserController();

router
    .post('/register', detector, controller.register)
    .get('/articles/:user_id', controller.getArticlesByUserId)
    .get('/device_logs/:user_id', controller.getDeviceLogsByUserId);

export { router as userRouter }
