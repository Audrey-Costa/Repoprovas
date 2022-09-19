import supertest from "supertest";
import { prisma } from "../src/config/database";
import app from "../src/index";
import getToken from "../src/utils/getToken";
import { testFactory } from "./factories/testFactory"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Tests"`;
});

describe("Test the route Post /test", ()=>{
    it("Return status code 201 if it's a valid test register", async ()=>{
        const test = await testFactory();
        test.category = "Projeto";
        test.discipline = "React";
        test.teacher = "Diego Pinho";
        const token = getToken();

        const result = await supertest(app).post('/test').send(test).set("Authorization", "Bearer " + token);
        const createdTest = await prisma.tests.findFirst({where:{name: test.name}});
        
        expect(createdTest).not.toBeNull();
        expect(result.status).toBe(201);
    });
    it("Return status code 404 if just one in (teacher, discipline, category) are not registered", async ()=>{
        const test = await testFactory();
        const token = getToken();

        await supertest(app).post('/test').send(test).set("Authorization", "Bearer " + token);

        const result = await supertest(app).post('/test').send(test).set("Authorization", "Bearer " + token);
        
        expect(result.status).toBe(404);
    });
    it("Return status code 400 if the entrance values are invalid", async ()=>{
        const test = {};
        const token = getToken();
        const result = await supertest(app).post('/test').send(test).set("Authorization", "Bearer " + token);

        expect(result.status).toBe(400);
    })
    it("Return status 401 if don't have a valid token", async ()=>{
        const test = await testFactory();
        const token = "";
        const result = await supertest(app).post('/test').send(test).set("Authorization", "Bearer " + token);

        expect(result.status).toBe(401);
    })
});

describe("Test the route Get /test/discipline", ()=>{
    it("Return status code 200 if the user have a valid token", async ()=>{
        const token = getToken();
        const result = await supertest(app).get("/test/discipline").set("Authorization", "Bearer " + token);

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
    })
    it("Return status code 401 if the user don't have a valid token", async ()=>{
        const token = "";
        const result = await supertest(app).get("/test/discipline").set("Authorization", "Bearer " + token);
    
        expect(result.status).toBe(401);
    })
})

describe("Test the route Get /test/teacher", ()=>{
    it("Return status code 200 if the user have a valid token", async ()=>{
        const token = getToken();
        const result = await supertest(app).get("/test/teacher").set("Authorization", "Bearer " + token);
    
        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array)
    })
    it("Return status code 401 if the user don't have a valid token", async ()=>{
        const token = "";
        const result = await supertest(app).get("/test/teacher").set("Authorization", "Bearer " + token);
        
        expect(result.status).toBe(401);
    })
})


afterAll(async () => {
    await prisma.$disconnect();
});