import { signup } from '../../../lib/auth';

export default async function handler(req, res) {
  const cred = req.body;
  const user = await signup(cred);

  return res.status(200).json(user);
}