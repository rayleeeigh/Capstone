import { getGrades } from '../../../../lib/grades';

export default async function handler(req, res) {
  const { subject_id } = req.query;
  const grades = await getGrades(subject_id);
  return res.status(200).json(grades);
}
