import { Router } from "express";
import { registerUser } from "../controllers/authController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { userSchema } from "../schemas/usersSchema";

const usersRouter = Router();

usersRouter.post("/register", schemaValidation(userSchema), registerUser);

export default usersRouter;