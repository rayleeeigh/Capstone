import { NextApiRequest, NextApiResponse } from 'next';
import { postAnnouncement } from '../../../lib/announcements';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  const announcements = await postAnnouncement();
  return res.status(200).end();
}
