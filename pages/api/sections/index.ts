import { getSections } from '../../../lib/sections';

export default async function handler(req, res) {
  const sections = await getSections();
  return res.status(200).json(sections);
}
