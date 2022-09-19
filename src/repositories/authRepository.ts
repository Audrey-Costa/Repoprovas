import { prisma } from "../config/database"
import { RegisterAuth } from "../types/usersTypes";


export async function findUser(email: string){
    const user = prisma.users.findFirst({where: { email }})
    return user;
}

export async function registerUser(newUser: RegisterAuth){
    await prisma.users.create({data: newUser })
}