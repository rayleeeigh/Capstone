import { NextApiRequest, NextApiResponse } from 'next';
import { postAnnouncement } from '../../../lib/announcements';

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  const {announcement,user} = req.body;
  const announcements = await postAnnouncement(announcement,user);
  return res.status(200).end();
}
