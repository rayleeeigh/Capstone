import executeQuery from '../modules/sql';
import bcrypt from 'bcryptjs'
import cookie from "cookie"

export const login = async (cred) => {
  const query = 'SELECT * FROM accounts WHERE username=?';
  const results = await executeQuery({ query: query, values: [cred.username] });
  if (results.length === 0){
    return "User not found"
  }
  if (bcrypt.compareSync(cred.password, results[0].password)){
    return results;
  }
  else {
    return "Incorrect Password"
  }
};

export default function parseCookies (req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}