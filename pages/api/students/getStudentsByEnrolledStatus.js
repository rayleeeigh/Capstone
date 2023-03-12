import { getStudentsByEnrollStatus } from '../../../lib/students';

export default async function handler(req, res) {
  const { enrolled, gradeLevel, section } = req.query;
  const students = await getStudentsByEnrollStatus(enrolled, gradeLevel, section);
  return res.status(200).json(students);
}
