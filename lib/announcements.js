import executeQuery from '../modules/sql';

export const getAnnouncements = async () => {
  const query = 'SELECT * FROM announcements';
  const results = await executeQuery({ query: query, values: [] });
  return results;
};

export const postAnnouncement = async () => {
  const query =
    'INSERT INTO announcements(title,content,type,created_by) VALUES(?,?,?,?)';
  const results = await executeQuery({
    query: query,
    values: ['test_1_title', 'test_1_content', 1, 1],
  });
};

export const updateAnnouncement = async () => {
    let result = await mysql
  const query = 'SELECT * FROM announcements';
  const results = await executeQuery({ query: query, values: [] });
  return results;
};

export const removeAnnouncement = async () => {
  const query = 'SELECT * FROM announcements';
  const results = await executeQuery({ query: query, values: [] });
  return results;
};
