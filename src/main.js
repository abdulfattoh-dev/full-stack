import express from 'express';
import { config } from 'dotenv';

import { guruhRouter } from './routes/guruhlar.route.js';
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/group', guruhRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));