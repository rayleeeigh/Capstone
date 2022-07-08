import executeQuery from "../modules/sql"

export const getGrades = async(subject_id) => {
    const query = 'SELECT * FROM grades WHERE subject_id = ?';
    const results = await executeQuery({query: query, values:[subject_id]})
    return results;
}