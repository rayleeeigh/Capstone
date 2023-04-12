import { AccountInterface } from '../interfaces/AccountInterface';
import { SectionInterface } from '../interfaces/SectionInterface';
import executeQuery from '../modules/sql';
import { PHTime } from '../utils/momentCustomFormat';

export const getSections = async () => {
  const query = 'SELECT * FROM sections';
  const results = await executeQuery({ query: query, values: [] });
  return results;
};

export const postSection = async (section: SectionInterface) => {
  const query = 'INSERT INTO sections(section_name,year_level) VALUES(?,?)';
  const results = await executeQuery({
    query: query,
    values: [
      section.section_name,
      section.year_level,
      // user.account_id,
      // PHTime().format(),
    ],
  });
};

export const updateSection = async (section: SectionInterface) => {
  const query =
    'UPDATE sections SET section_name=?, year_level=? WHERE section_id = ?';
  const results = await executeQuery({
    query: query,
    values: [section.section_name, section.year_level, section.section_id],
  });
  return results;
};

export const removeSection = async (
  section: SectionInterface,
  status: string
) => {
  const query = 'UPDATE sections SET status = ? WHERE section_id = ?';
  const results = await executeQuery({
    query: query,
    values: [status, section.section_id],
  });
  return results;
};
