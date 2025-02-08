import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import ollamaRoutes from './routes/ollamaRoutes.js';
const app = express();

app.use(bodyParser.json());
app.use(cors());


// routes
app.use("/api/ollama", ollamaRoutes);

export default app
