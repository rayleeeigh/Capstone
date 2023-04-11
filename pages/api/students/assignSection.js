import { assignSection } from '../../../lib/students';
import { getSections } from '../../../lib/sections';

export default async function handler(req, res) {
  const { array, students, sections }= req.body;
  await assignSection(array, students, sections);
  return res.status(200).json();
}
