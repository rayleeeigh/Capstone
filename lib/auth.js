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

export const signup = async (cred) => {
  const query = 'INSERT INTO accounts (username, password, first_name, last_name, birthdate, type, status, created_by, updated_by, updated_at) VALUES (?, ?, ?, ?, ?, 1, 1, ?, 1, ?)';
  const results = await executeQuery({ query: query, values: [cred.username, cred.password, cred.firstname, cred.lastname, cred.birthdate, cred.created_by, cred.updated_at] });
  return results;
};

export default function parseCookies (req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}