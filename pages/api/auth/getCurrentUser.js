import { getCurrentStudentUser, getCurrentTeacherUser} from '../../../lib/auth';

export default async function handler(req, res) {
  const { accountID, type } = req.query;
  var user

  if (+type === 1){
    user = await getCurrentStudentUser(accountID);
  }
  else if (+type === 2){
    user = await getCurrentTeacherUser(accountID);
  }

  return res.status(200).json(user);
}
