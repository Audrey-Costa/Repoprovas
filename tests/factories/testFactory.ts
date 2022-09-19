import { faker } from "@faker-js/faker";
import { TestType } from "../../src/types/testsTypes";

export async function testFactory(){
    const test: TestType = {
        name: faker.name.jobArea(),
        pdfUrl: faker.internet.url(),
        category: faker.word.verb(6),
        discipline: faker.name.jobArea(),
        teacher: faker.name.fullName()
    }

    return test;
}