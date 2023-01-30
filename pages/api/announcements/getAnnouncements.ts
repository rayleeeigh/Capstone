import { NextApiRequest, NextApiResponse } from 'next';
import { getAnnouncements } from '../../../lib/announcements';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const announcements = await getAnnouncements();
  return res.status(200).json(announcements);
}
