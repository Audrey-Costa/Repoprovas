import { Router } from "express";
import usersRouter from "./authRouter";

const router = Router();

router.use(usersRouter);

export default router;