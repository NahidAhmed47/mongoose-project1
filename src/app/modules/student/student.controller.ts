import { Request, Response } from 'express'
import { StudentService } from './student.service'
// import validator from 'validator';

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await req.body.student
        const result = await StudentService.createStudentToDB(student)
        res.status(200).json({
            success: true,
            message: 'Student created successfully',
            data: result,
        })
    } catch (err) {
        console.log(err)
    }
}

const getStudentsFromDB = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getStudentsFromDB()
        res.status(200).json({
            success: true,
            message: 'Students are retrieved successfully',
            data: result,
        })
    } catch (err) {
        console.log(err)
    }
}

// get student by id
const getStudentById = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.getStudentById(studentId)
        res.status(200).json({
            success: true,
            message: 'Single student retrieved successfully',
            data: result,
        })
    } catch (err) {
        console.log(err)
    }
}

export const StudentController = {
    createStudent,
    getStudentsFromDB,
    getStudentById,
}
