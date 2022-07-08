import executeQuery from "../modules/sql"

export const getSubjects = async() => {
    const query = 'SELECT * FROM subjects';
    const results = await executeQuery({query: query, values:[]})
    return results;
}