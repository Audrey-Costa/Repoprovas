import { prisma } from "../config/database";

export async function registerTest(name: string, pdfUrl: string, categoryId: number, teachersDisciplinesId: number, ) {
    await prisma.tests.create({
        data: { name, pdfUrl, categoryId, teachersDisciplinesId}
    })
}

export async function findCategory(category: string) {
    try {
        const { id: categoryId } = await prisma.categories.findFirst({where: {name: category}})
        return categoryId
    } catch (error) {
        throw {type: "Not Found", message: "Category not found!"}
    }
}

export async function findDisciplines(discipline: string) {
    try {
        const { id: disciplineId } = await prisma.disciplines.findFirst({where: {name: discipline}})
        return disciplineId
    } catch (error) {
        throw {type: "Not Found", message: "Discipline not found!"}
    }
}

export async function findTeachers(teacher: string) {
    try {
        const { id: teacherId } = await prisma.teachers.findFirst({where: {name: teacher}})
        return teacherId
    } catch (error) {
        throw {type: "Not Found", message: "Teacher not found!"}
    }
}

export async function findTeachersDisciplines(teacherId: number, disciplineId: number) {
    try {
        const { id: teacherDisciplineId } = await prisma.teachersDisciplines.findFirst({where: {AND: {teacherId, disciplineId}}})
        return teacherDisciplineId
    } catch (error) {
        throw {type: "Not Found", message: "This teacher doesnt teachs this discipline!"}
    }
}

export async function findTestByDiscipline() {
    try {
        const tests = await prisma.terms.findMany({
           select:{
            number: true,
            disciplines:{select:{
                name: true,
                teachersDisciplines: {select: {
                    teachers: {
                        select:{
                            name: true
                        },
                    }, tests: {select:{
                        categories:{select:{name:true}},
                        name:true}}
                }}
            }}
           }
        })
        return tests;
    } catch (error) {
        throw {type: "Not Found", message: "There aren't tests yet!"}
    }
}


export async function findTestByTeacher() {
    try {
        const tests = await prisma.teachers.findMany({
           select:{
            name: true,
            teachersDisciplines:{select:{
                tests:{select:{
                    categories:{select:{
                        name: true,
                        tests:{select:{name: true}}
                    }},
            }}
                }}
            }}
        )
        return tests;
    } catch (error) {
        throw {type: "Not Found", message: "There aren't tests yet!"}
    }
}
