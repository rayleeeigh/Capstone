import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";


export default function DataTable({subjects, grades}){
    return(
        <Table variant='simple' my='4vh'>
            <TableCaption>Rayl's Grades</TableCaption>
            <Thead bg='blue.100'>
            <Tr>
                <Th>Subject</Th>
                <Th>1st</Th>
                <Th>2nd</Th>
                <Th>3rd</Th>
                <Th>4th</Th>
                <Th>Average</Th>
            </Tr>
            </Thead>
            <Tbody>
            {subjects.map(subject=>(
                <Tr key={subject.subject_id}>
                    <Td>{subject.name}</Td>
                    {grades.map((grade)=>(
                        <Td key={grade.grade_id}>{grade.value}</Td>
                    ))}
                </Tr>
            ))}
            </Tbody>
        </Table>
    )
}