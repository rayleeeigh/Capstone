import { SectionInterface } from "../interfaces/SectionInterface";
import StudentInterface from "../interfaces/StudentInterface";
import executeQuery from "../modules/sql"

export const getStudentsByEnrollStatus = async(enrolled, gradeLevel, section) => {
    let query = enrolled !== '0' ? 'SELECT * FROM students stu inner join sections sec on stu.section = sec.section_id WHERE stu.is_enrolled != 0 ORDER BY last_name' : 'SELECT * FROM students  WHERE is_enrolled = 0 ORDER BY last_name';
    query = gradeLevel !== '0'? 'SELECT * FROM students stu inner join sections sec on stu.section = sec.section_id WHERE stu.is_enrolled != 0 AND stu.year_level = ? ORDER BY stu.last_name' : query;
    query = section !== '0' && enrolled != '0'? 'SELECT * FROM students stu inner join sections sec on stu.section = sec.section_id WHERE sec.section_id = ? AND stu.year_level = ? ORDER BY stu.last_name' : query;

    if (enrolled !== '0'){
        let results
        if (section === '0'){
            results = gradeLevel !== '0' ? await executeQuery({query: query, values: [gradeLevel]}) : await executeQuery({query: query, values: []});
        }
        else {
            results = section !== '0'? await executeQuery({query: query, values: [section, gradeLevel]}) : await executeQuery({query: query, values: [gradeLevel]});
        }
        return results;
    }
    else {
        console.log(query)
        return await executeQuery({query: query, values: []});
    }
}

export const assignSection = async(array: Array<number>,students : StudentInterface[], sections : SectionInterface[]) =>{
    for (let x=0, y=0; x<students.length; x++){
        let query = 'Insert into sectioning (section_id,student_id) values (?,?)';
        await executeQuery({query: query, values: [sections[y].section_id, students[array[x]].student_id]});
        query = 'UPDATE students SET is_enrolled = ?, section = ? WHERE student_id = ?';
        await executeQuery({query: query, values: [1, sections[y].section_id,students[array[x]]?.student_id]});
        y++
    }
}

export const getAllStudents = async () => {
    const query = 'SELECT * FROM accounts a JOIN students s ON a.account_id = s.account_id';
    const results = await executeQuery({ query: query, values: [] });
    return results;
  };
  