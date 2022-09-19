import { faker } from "@faker-js/faker";
import { RegisterAuth } from "../../src/types/usersTypes";

export default async function userFactory() {
    const email: string = faker.internet.email();
    const password: string = faker.internet.password(10);

    const user: RegisterAuth = {
        email,
        password,
        confirmPassword: password
    };

    return user;
  }