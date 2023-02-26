import {
  getAdmin,
  getCurrentStudentUser,
  getCurrentTeacherUser,
} from '../../../lib/auth';
import { userType } from '../../../constants/userType';

export default async function handler(req, res) {
  const { accountID, type } = req.query;
  var user;

  if (type === '1') {
    user = await getCurrentStudentUser(accountID);
  } else if (type === '2') {
    user = await getCurrentTeacherUser(accountID);
  } else if (type === '3') {
    user = await getAdmin(accountID);
  }

  return res.status(200).json(user);
}
