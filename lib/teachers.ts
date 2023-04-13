import executeQuery from '../modules/sql';

export const getAllTeachers = async () => {
  const query =
    'SELECT * FROM accounts a JOIN teachers t ON a.account_id = t.account_id';
  const results = await executeQuery({ query: query, values: [] });
  return results;
};
