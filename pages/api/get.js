import { getAccouncements } from "../../lib/announcements";

export default async function handler(req, res) {
  const announcements = await getAccouncements();
  return res.status(200).json({
    announcements
  });
}