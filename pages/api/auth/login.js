import { login } from '../../../lib/auth';

export default async function handler(req, res) {
  const cred = req.body;
  const user = await login(cred);

	if (typeof user === 'string'){
		return res.send({error: user})
	}

  return res.status(200).json(user);
}
