import { login } from '../../../lib/auth';

export default async function handler(req, res) {
  const cred = req.body;
  const result = await login(cred);
  let errors = [];

  if(cred.username == '' || cred.password == ''){

    if(cred.username == ''){
      errors.push('School Id field is empty.');
    }
    if(cred.password == ''){
      errors.push('Password field is empty.');
    }
    return res.send({error: errors})
  }
 
	if (!result.isAuth){
    errors.push(result.error);
		return res.send({error: errors});
	}

  return res.status(200).json(result);
}
