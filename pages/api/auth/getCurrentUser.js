import {
  getAdmin,
  getCurrentStudentUser,
  getCurrentTeacherUser,
} from '../../../lib/auth';
import { userType } from '../../../constants/userType';

export default async function handler(req, res) {
  const { accountID, type } = req.query;
  var user;
  
  if (type == userType.student) {
    user = await getCurrentStudentUser(accountID);
  } else if (type == userType.teacher) {
    user = await getCurrentTeacherUser(accountID);
  } else if (type == userType.admin) {
    user = await getAdmin(accountID);
  }

  return res.status(200).json(user);
}
