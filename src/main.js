import express from 'express';
import { config } from 'dotenv';

import { connectDB } from './db/connectDB.js';
import { userRouter } from './routes/user.routes.js';
import { articleRouter } from './routes/article.routes.js';
config();

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());

await connectDB();

app.use('/users', userRouter);
app.use('/articles', articleRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
