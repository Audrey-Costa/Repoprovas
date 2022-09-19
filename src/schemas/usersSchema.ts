import Joi from "joi";
import { LoginAuth, RegisterAuth } from "../types/usersTypes";

export const registerSchema = Joi.object<RegisterAuth>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().equal(Joi.ref('password')).required()
})

export const loginSchema = Joi.object<LoginAuth>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})