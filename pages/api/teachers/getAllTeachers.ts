import { getAllTeachers } from '../../../lib/teachers';

export default async function handler(req, res) {
  const teachers = await getAllTeachers();
  return res.status(200).json(teachers);
}
