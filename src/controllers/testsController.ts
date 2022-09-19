import { Request, Response } from "express";
import { TestType } from "../types/testsTypes";
import * as testsService from "../services/testsService";

export async function registerTest(req: Request, res: Response) {
    const newTest: TestType = req.body;
    await testsService.registerTest(newTest)
    res.sendStatus(201);
}

export async function findTestByDiscipline(req: Request, res: Response){
    const tests = await testsService.findTestByDiscipline();
    res.status(200).send(tests);
}