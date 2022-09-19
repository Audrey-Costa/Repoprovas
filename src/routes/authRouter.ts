import { Router } from "express";
import { login, registerUser } from "../controllers/authController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { registerSchema, loginSchema } from "../schemas/usersSchema";

const usersRouter = Router();

usersRouter.post("/register", schemaValidation(registerSchema), registerUser);
usersRouter.post("/login", schemaValidation(loginSchema), login);

export default usersRouter;