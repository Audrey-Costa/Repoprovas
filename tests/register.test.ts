import supertest from "supertest";
import { prisma } from "../src/config/database";
import app from "../src/index";
import userFactory from "./factories/userFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Users"`;
});

describe("Test the route post /register", ()=>{
    it("Return status code 201 if it's a valid unique email", async ()=>{
        const user = await userFactory();

        const result = await supertest(app).post('/register').send(user);
        const createdUser = await prisma.users.findUnique({where:{email: user.email}})
        
        expect(createdUser).not.toBeNull();
        expect(result.status).toBe(201);
    });
    it("Return status code 409 if it's an email already registered", async ()=>{
        const user = await userFactory();

        await supertest(app).post('/register').send(user);

        const result = await supertest(app).post('/register').send(user);
        
        expect(result.status).toBe(409);
    });
    it("Return status code 400 if the entrance values are invalid", async ()=>{
        const user = {};
        const result = await supertest(app).post('/register').send(user);

        expect(result.status).toBe(400);
    })
});

afterAll(async () => {
    await prisma.$disconnect();
});