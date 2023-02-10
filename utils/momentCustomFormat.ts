import moment from 'moment-timezone';

export const PHTime = (): moment.Moment => {
  const PHStandardTime = moment().tz('Asia/Manila');
  return PHStandardTime;
};
