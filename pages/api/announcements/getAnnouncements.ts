import { NextApiRequest, NextApiResponse } from 'next';
import { getAnnouncements } from '../../../lib/announcements';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { test } = req.body;
  console.log(req.query, 'test');
  const announcements = await getAnnouncements();
  return res.status(200).json(announcements);
}
