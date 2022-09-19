import { UserAuth } from "../types/usersTypes";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";

export async function registerUser(newUser: UserAuth){
    delete newUser.confirmPassword;
    console.log(newUser)

    const user = await authRepository.findUser(newUser.email);
    if(user){
        throw {type: "Conflict", message: "This email is already in use!"};
    }
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await authRepository.registerUser(newUser);
}
