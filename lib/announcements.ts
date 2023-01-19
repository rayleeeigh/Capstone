import { AnnouncementInterface } from '../interfaces/AnnouncementInterface';
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

export const updateAnnouncement = async (
  announcement: AnnouncementInterface
) => {
  const query =
    'UPDATE announcements SET title=?, content=?, type=?, updated_at=?, updated_by=? WHERE announcement_id = ?';
  const results = await executeQuery({
    query: query,
    values: [
      announcement.title,
      announcement.content,
      announcement.type,
      announcement.updated_at,
      announcement.updated_by,
      announcement.announcement_id,
    ],
  });
  return results;
};

export const removeAnnouncement = async (status: string) => {
  const query = 'UPDATE announcements SET status = ?';
  const results = await executeQuery({ query: query, values: [status] });
  return results;
};
