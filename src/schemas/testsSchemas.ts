import Joi from "joi";
import { TestType } from "../types/testsTypes";

export const testsSchema = Joi.object<TestType>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().uri().required(),
    category: Joi.string().required(),
    discipline: Joi.string().required(),
    teacher: Joi.string().required()
})