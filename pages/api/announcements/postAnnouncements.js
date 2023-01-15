import { postAnnouncement } from '../../../lib/announcements';

export default async function handler(req, res) {
  const announcements = await postAnnouncement();
  return res.status(200).end();
}
