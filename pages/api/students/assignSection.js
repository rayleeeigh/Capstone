import { assignSection } from '../../../lib/students';
import { getSections } from '../../../lib/sections';

export default async function handler(req, res) {
  const { array, students }= req.body;
  const sections = await getSections()
  await assignSection(array, students, sections);
  return res.status(200).json();
}
