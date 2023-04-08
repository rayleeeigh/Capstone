import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import SubjectInterface from '../interfaces/SubjectInterface';

export default function DataTable({ grades }) {
  const authContext = useContext(AuthContext);
  const { userInfo } = authContext;
  let finalAverage = 0;

  function computeAverage(sum,count){
    finalAverage+=sum/count;
    return sum/count;
  }

  return (
    <>
    <Table variant="simple" my="4vh">
      <TableCaption>{`${userInfo.first_name} ${userInfo.last_name}`}`s Grades</TableCaption>
      <Thead bg="blue.100">
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
        {grades.map((grade) => (
          <Tr key={grade.subject_id}>
            <Td>{grade.name}</Td>
              <Td color={grade.first_grading < 75? "red":""}>{grade.first_grading}</Td>
              <Td color={grade.second_grading < 75? "red":""}>{grade.second_grading}</Td>
              <Td color={grade.third_grading < 75? "red":""}>{grade.third_grading}</Td>
              <Td color={grade.fourth_grading < 75? "red":""}>{grade.fourth_grading}</Td>
              <Td>{computeAverage(grade.first_grading+grade.second_grading+grade.third_grading+grade.fourth_grading,4)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <Text>Final Average: {Number(finalAverage/grades.length).toFixed(2)}</Text>
    </>
  );
}
