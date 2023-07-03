import express from 'express';
import dotenv from 'dotenv';
import webRouter from './routers/web.js';

dotenv.config();

const app = express();

app.use(webRouter);


const port = process.env.PORT || 3000;
const server = process.env.APP_URL || 'localhost';
app.listen(port, () => {
    console.log(`Server is running on ${server}:${port}`);
});

