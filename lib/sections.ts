import executeQuery from "../modules/sql"

export const getSections = async() => {
    const query = 'SELECT * FROM sections';
    const results = await executeQuery({query: query, values: []})
    return results;
}