import { NextApiRequest, NextApiResponse } from 'next';
import { removeAnnouncement } from '../../../lib/announcements';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { status } = req.body;
  const announcements = await removeAnnouncement(status);
  return res.status(200).end();
}
