import { Router } from "express";
import { registerTest } from "../controllers/testsController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { validateToken } from "../middlewares/validateToken";
import { testsSchema } from "../schemas/testsSchemas";

const testsRouter = Router();

testsRouter.post("/test", validateToken, schemaValidation(testsSchema), registerTest);

export default testsRouter;
