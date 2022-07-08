import { getSubjects } from "../../../lib/subjects";

export default async function handler(req, res) {
  const subjects = await getSubjects();
  return res.status(200).json(subjects);
}