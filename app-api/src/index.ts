import express from "express";
import cors from "cors";
import router from './router';
import * as errHandler from "./router/error_handler";

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errHandler.handler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});