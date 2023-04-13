import { getAllStudents } from '../../../lib/students';
import { getSubjects } from '../../../lib/subjects';

export default async function handler(req, res) {

  const students = await getAllStudents();
  return res.status(200).json(students);
}
