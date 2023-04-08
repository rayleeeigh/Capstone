import executeQuery from "../modules/sql"

export const getGrades = async(subject_id) => {
    const query = 'SELECT * FROM grades';
    const results = await executeQuery({query: query, values:[]})
    return results;
}

export const getGradesOfStudent = async(student_id) => {
  const query = 'SELECT * FROM grades g inner join subject_assignment sa on g.subject_assignment_id = sa.subject_assignment_id inner join subjects sub on sa.subject_id = sub.subject_id WHERE g.student_id = ?';
  const results = await executeQuery({query: query, values:[student_id]})
  return results;
}

export const postAnnouncement = async () => {
    const query =
      'INSERT INTO grades(value,created_at,created_by) VALUES(?,?,?)';
    const results = await executeQuery({
      query: query,
      values: ['test_1_title', 'test_1_content', 1, 1],
    });
  };
  
  export const updateAnnouncement = async () => {
    const query = 'SELECT * FROM announcements';
    const results = await executeQuery({ query: query, values: [] });
    return results;
  };
  
  export const removeAnnouncement = async () => {
    const query = 'SELECT * FROM announcements';
    const results = await executeQuery({ query: query, values: [] });
    return results;
  };