import { NextApiRequest, NextApiResponse } from 'next';
import { postSubject } from '../../../lib/subjects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { subject } = req.body;
  const announcements = await postSubject(subject);
  return res.status(200).end();
}
