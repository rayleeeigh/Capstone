import { NextApiRequest, NextApiResponse } from 'next';
import { postSection } from '../../../../lib/sections';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { section } = req.body;
  console.log(section)
  const announcements = await postSection(section);
  return res.status(200).end();
}
