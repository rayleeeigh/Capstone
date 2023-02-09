import { getSubjects } from '../../../lib/subjects';

export default async function handler(req, res) {
  const {year} = req.query;
  const subjects = await getSubjects(year);
  return res.status(200).json(subjects);
}
