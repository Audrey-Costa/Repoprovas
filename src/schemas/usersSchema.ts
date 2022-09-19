import Joi from "joi";
import { UserAuth } from "../types/usersTypes";

export const userSchema = Joi.object<UserAuth>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().equal(Joi.ref('password')).required()
})