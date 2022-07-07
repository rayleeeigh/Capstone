import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host     : process.env.SQL_HOST,
        database : process.env.SQL_DATABASE,
        user     : process.env.SQL_USERNAME,
        password : ''
    }
})
   
export default async function executeQuery({ query, values }) {
    try {
      const results = await db.query(query, values);
      await db.end();
      return results;
    } catch (error) {
      console.log(error);
    }
}