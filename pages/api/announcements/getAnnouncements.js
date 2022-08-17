import { getAnnouncements } from '../../../lib/announcements';

export default async function handler(req, res) {
  const announcements = await getAnnouncements();
  return res.status(200).json(announcements);
}
