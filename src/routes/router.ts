import { Router } from "express";
import usersRouter from "./authRouter";
import testsRouter from "./testsRouter";

const router = Router();

router.use(usersRouter, testsRouter);

export default router;