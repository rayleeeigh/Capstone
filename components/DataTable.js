import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";


export default function DataTable(){
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
            <Tr>
                <Td>English</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
            </Tr>
            <Tr>
                <Td>Math</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
            </Tr>
            <Tr>
                <Td>Filipino</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
                <Td>80</Td>
            </Tr>
            </Tbody>
        </Table>
    )
}