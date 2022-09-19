export type RegisterAuth = {
    email: string;
    password: string;
    confirmPassword: string;
}

export type LoginAuth = Omit<RegisterAuth, "confirmPassword">