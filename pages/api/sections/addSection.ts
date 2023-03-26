import { NextApiRequest, NextApiResponse } from 'next';
import { postAnnouncement } from '../../../lib/announcements';
import { postSection } from '../../../lib/sections';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { section } = req.body;
  const announcements = await postSection(section);
  return res.status(200).end();
}
