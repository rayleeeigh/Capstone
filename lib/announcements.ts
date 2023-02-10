import { AccountInterface } from '../interfaces/AccountInterface';
import { AnnouncementInterface } from '../interfaces/AnnouncementInterface';
import executeQuery from '../modules/sql';
import { PHTime } from '../utils/momentCustomFormat';

export const getAnnouncements = async () => {
  const query = 'SELECT * FROM announcements a INNER JOIN accounts acc ON acc.account_id = a.created_by';
  const results = await executeQuery({ query: query, values: [] });
  return results;
};

export const postAnnouncement = async (announcementData : AnnouncementInterface , user:AccountInterface) => {
  const query =
    'INSERT INTO announcements(title,content,type,created_by,created_at) VALUES(?,?,?,?,?)';
  const results = await executeQuery({
    query: query,
    values: [announcementData.title, announcementData.content, announcementData.type, user.account_id , PHTime().format()],
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
