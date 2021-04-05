import express from 'express';
import cors from 'cors';
import * as jwt from 'jsonwebtoken';
import router from './router';
import * as errHandler from './router/error_handler';

const app = express();
const port = process.env.APP_PORT;

app.use(cors({
    origin: process.env.APP_UI_ORIGIN
}));

app.use(express.json());
app.use(router);
app.use(errHandler.handler);

app.listen(port, () => {
    console.log(`App-api start on http://localhost:${port}`);
});