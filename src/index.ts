import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/router";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

const app = express();
app.use(cors(), express.json(), router);
app.use(errorHandlerMiddleware);

export default app;