import { NextApiRequest, NextApiResponse } from 'next';
import { updateAnnouncement } from '../../../lib/announcements';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { announcement } = req.body;
  const announcements = await updateAnnouncement(announcement);
  return res.status(200).end();
}
