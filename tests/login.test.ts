import supertest from "supertest";
import { prisma } from "../src/config/database";
import app from "../src/index";
import userFactory from "./factories/userFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Users"`;
});

describe("Test the route post /login", ()=>{
    it("Return status code 200 if it's a valid user", async ()=>{
        const user = await userFactory();
        await supertest(app).post('/register').send(user).then(async ()=>{
            const result = await supertest(app).post(`/login`).send({email: user.email, password: user.password});
            expect(result.status).toBe(200);
        }
        );
    });
    it("Return status code 401 if it's an invalid user", async ()=>{
        const user = await userFactory();
        const result = await supertest(app).post(`/login`).send({email: user.email, password: user.password});
        
        expect(result.status).toBe(401);
    });
});


afterAll(async () => {
    await prisma.$disconnect();
});