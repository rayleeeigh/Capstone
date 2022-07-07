import executeQuery from "../modules/sql"

export const getAccouncements = async() => {
    const query = 'SELECT * FROM announcements';
    const results = await executeQuery({query: query, values:[]})
    return results;
}