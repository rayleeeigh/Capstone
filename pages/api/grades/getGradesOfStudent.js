import { getGradesOfStudent } from '../../../lib/grades';

export default async function handler(req, res) {
  const { id } = req.query;
  const grades = await getGradesOfStudent(id);
  return res.status(200).json(grades);
}
