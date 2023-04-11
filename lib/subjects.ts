import SubjectInterface from '../interfaces/SubjectInterface';
import executeQuery from '../modules/sql';

export const getSubjects = async (year) => {
  const query = 'SELECT * FROM subjects WHERE year_level = ?';
  const results = await executeQuery({ query: query, values: [year] });
  return results;
};

export const getAllSubjects = async () => {
    const query = 'SELECT * FROM subjects';
    const results = await executeQuery({ query: query, values: [] });
    return results;
  };

export const postSubject = async (subject: SubjectInterface) => {
  const query = 'INSERT INTO subjects(name,year) VALUES(?,?)';
  const results = await executeQuery({
    query: query,
    values: [
      subject.name,
      subject.year,
      // user.account_id,
      // PHTime().format(),
    ],
  });
};

export const updateSubject = async (subject: SubjectInterface) => {
  const query = 'UPDATE sections SET name=?, year=? WHERE subject_id = ?';
  const results = await executeQuery({
    query: query,
    values: [subject.name, subject.year, subject.subject_id],
  });
  return results;
};

export const removeSubject = async (
  subject: SubjectInterface,
  status: string
) => {
  const query = 'UPDATE sections SET status = ? WHERE section_id = ?';
  const results = await executeQuery({
    query: query,
    values: [status, subject.subject_id],
  });
  return results;
};
