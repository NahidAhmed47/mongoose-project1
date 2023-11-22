import { StudentModel } from '../student.models'
import { Student } from './student.interface'

const createStudentToDB = async (student: Student) => {
  // create student in database
  const res = await StudentModel.create(student)
  return res
}

// get students
const getStudentsFromDB = async () => {
  const res = await StudentModel.find()
  return res
}

// get student by student id
const getStudentById = async (id: string) => {
  const res = await StudentModel.findOne({ id })
  return res
}

export const StudentService = {
  createStudentToDB,
  getStudentsFromDB,
  getStudentById,
}
