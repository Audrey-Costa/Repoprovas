import { TestType } from "../types/testsTypes";
import * as testRepository from "../repositories/testsRepository"

export async function registerTest(newTest: TestType){
    const categoryId = await testRepository.findCategory(newTest.category);
    const disciplineId = await testRepository.findDisciplines(newTest.discipline);
    const teacherId = await testRepository.findTeachers(newTest.teacher);
    const teachersDisciplinesId = await testRepository.findTeachersDisciplines(teacherId, disciplineId);
    await testRepository.registerTest(newTest.name, newTest.pdfUrl, categoryId, teachersDisciplinesId);
}

export async function findTestByDiscipline() {
    const tests = await testRepository.findTestByDiscipline();
    return tests;
}