import executeQuery from "../modules/sql"

export const getSubjects = async(year) => {
    const query = 'SELECT * FROM subjects WHERE year = ?';
    const results = await executeQuery({query: query, values:[year]})
    return results;
}