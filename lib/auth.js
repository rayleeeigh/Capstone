import executeQuery from '../modules/sql';
import bcrypt from 'bcryptjs';
import cookie from 'cookie';
import { userType } from '../constants/userType';

export const login = async (cred) => {
  const query = 'SELECT username,password,type FROM accounts WHERE username=?';
  const results = await executeQuery({ query: query, values: [cred.username] });
  if (results.length === 0) {
    return {isAuth:false, error: "User not found."};
  }
  if (bcrypt.compareSync(cred.password, results[0].password)) {
    let query;

    switch(results[0].type)
    { 
      case userType.student:
        query = 'SELECT * FROM accounts acc inner join students stud on acc.account_id = stud.account_id where acc.username=?';
        break;
      case userType.teacher:
        query = 'SELECT first_name,last_name,type,acc.account_id FROM accounts acc inner join teachers teach on acc.account_id = teach.account_id where acc.username=?';
        break;
      case userType.admin:
        query = 'SELECT first_name,last_name,type,acc.account_id FROM accounts acc inner join admins ad on acc.account_id = ad.account_id where acc.username=?';
        break;
    }
    const res = await executeQuery({ query: query, values: [cred.username] });
    return {isAuth:true, res: res};
  } else {
    return {isAuth:false, error: 'Incorrect Password'};
  }
};

export const signup = async (cred) => {
  const query =
    'INSERT INTO accounts (username, password, type, status, created_by, updated_by, updated_at) VALUES (?, ?, ?, 1, ?, 1, ?)';
  executeQuery({
    query: query,
    values: [
      cred.username,
      cred.password,
      cred.type,
      cred.created_by,
      cred.updated_at,
    ],
  })
    .then((res) => {
      if (cred.type === '1') {
        let queryType =
          'INSERT INTO students (account_id, first_name, last_name, gender, year_level, contact_no, status) VALUES (?, ?, ?, ?, ?, ?, 1)';
        executeQuery({
          query: queryType,
          values: [
            res.insertId,
            cred.firstname,
            cred.lastname,
            cred.gender,
            cred.yearLevel,
            cred.contactNumber,
          ],
        });
      } else if (cred.type === '2') {
        let queryType =
          'INSERT INTO teachers (account_id, first_name, last_name, gender, position, contact_no, status) VALUES (?, ?, ?, ?, ?, ?, 1)';
        executeQuery({
          query: queryType,
          values: [
            res.insertId,
            cred.firstname,
            cred.lastname,
            cred.gender,
            cred.position,
            cred.contactNumber,
          ],
        });
      }
    })
    .catch(() => {
      console.log(error);
    });
};

export default function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export const getCurrentStudentUser = async (accountID) => {
  const query = 'SELECT * FROM students WHERE account_id = ?';
  const results = await executeQuery({ query: query, values: [accountID] });
  return results;
};

export const getCurrentTeacherUser = async (accountID) => {
  const query = 'SELECT * FROM teachers WHERE account_id = ?';
  const results = await executeQuery({ query: query, values: [accountID] });
  return results;
};

export const getAdmin = async (accountID) => {
  const query = 'SELECT * FROM admins WHERE account_id = ?';
  const results = await executeQuery({ query: query, values: [accountID] });
  return results;
};
