import { LoginAuth, RegisterAuth } from "../types/usersTypes";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function registerUser(newUser: RegisterAuth){
    delete newUser.confirmPassword;
    console.log(newUser)

    const user = await authRepository.findUser(newUser.email);
    if(user){
        throw {type: "Conflict", message: "This email is already in use!"};
    }
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await authRepository.registerUser(newUser);
}

export async function login(user: LoginAuth){
    const searchUser = await authRepository.findUser(user.email);
    if(!searchUser){
        throw {type: "Unauthorized", message: "User or password incorrect"};
    }
    const comparePassword = bcrypt.compareSync(
        user.password,
        searchUser.password
      );
    if(!comparePassword){
        throw {type: "Unauthorized", message: "User or password incorrect"};
    }

    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;
    const payload = {
        id: searchUser.id,
        email: searchUser.email
      };

    const jwtConfig = {
        expiresIn: EXPIRES_IN
      };

    const token = jwt.sign(payload, SECRET, jwtConfig);
    return token;
}