import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post("/create-student", StudentController.createStudent)

router.get("/", StudentController.getStudentsFromDB)

router.get("/:studentId", StudentController.getStudentById)

export const StudentRoutes = router;