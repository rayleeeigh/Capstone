import { parseCookies } from '../../../lib/auth';

export default async function handler(req, res) {
  const cookie = await parseCookies(req);

  return res.status(200).json(cookie);
}
