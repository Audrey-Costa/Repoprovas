import { Router } from "express";
import { findTestByDiscipline, registerTest } from "../controllers/testsController";
import schemaValidation from "../middlewares/schemaValidationMiddleware";
import { validateToken } from "../middlewares/validateToken";
import { testsSchema } from "../schemas/testsSchemas";

const testsRouter = Router();

testsRouter.post("/test", validateToken, schemaValidation(testsSchema), registerTest);
testsRouter.get("/test/discipline", validateToken, findTestByDiscipline);

export default testsRouter;
