import { Router } from "express";

import { ArticleController } from '../controllers/article.controller.js';

const router = Router();
const controller = new ArticleController();

router
    .post('/', controller.create);

export { router as articleRouter }
