import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await req.body.student;
        const result = await StudentService.createStudentToDB(student);
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        })
    } catch (err) {
        console.log(err)
    }
};

const getStudentsFromDB = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "Students are retrieved successfully",
            data: result,
        })
    } catch (err) {
        console.log(err)
    }
}

export const StudentController = {
    createStudent,
    getStudentsFromDB,
}