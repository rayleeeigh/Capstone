import { SectionInterface } from "../interfaces/SectionInterface";
import StudentInterface from "../interfaces/StudentInterface";
import executeQuery from "../modules/sql"

export const getStudentsByEnrollStatus = async(enrolled, gradeLevel, section) => {
    let query = enrolled !== '0' ? 'SELECT * FROM students WHERE enrolled != 0 ORDER BY last_name' : 'SELECT * FROM students WHERE enrolled = 0 ORDER BY last_name';
    query = gradeLevel !== '0'? 'SELECT * FROM students WHERE enrolled != 0 AND year_level = ? ORDER BY last_name' : query;
    query = section !== '0' && enrolled != '0'? 'SELECT * FROM students WHERE enrolled = ? AND year_level = ? ORDER BY last_name' : query;
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
        return await executeQuery({query: query, values: []});
    }
}

export const assignSection = async(array: Array<number>,students : StudentInterface[], sections : SectionInterface[]) =>{
    for (let x=0, y=0; x<students.length; x++){
        let query = 'UPDATE students SET enrolled = ? WHERE student_id = ?';
        await executeQuery({query: query, values: [sections[y].section_id, students[array[x]].student_id]});
        y++
    }
}