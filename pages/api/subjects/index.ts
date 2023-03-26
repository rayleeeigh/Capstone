import { getSections } from '../../../lib/sections';
import { getAllSubjects } from '../../../lib/subjects';

export default async function handler(req, res) {
  const subjects = await getAllSubjects();
  return res.status(200).json(subjects);
}
