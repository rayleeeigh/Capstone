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
  const [subjects, setSubjects] = useState<SubjectInterface[]>([]);
  let finalAverage = 0;

  useEffect(() => {
    axios
      .get('api/subjects/getSubjects', {
        params: {
          year: userInfo.year_level,
        },
      })
      .then(function (response) {
        setSubjects(response.data)
      });
  }, [userInfo]);

  function computeAverage(sum){
    finalAverage+=sum/4;
    return sum/4;
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
            {subjects.length !== 0?
            (<Td>{(subjects.find(subject => subject.subject_id === grade.subject_id).name)}</Td>)
            :
            (<Td>haha</Td>)}
              <Td color={grade.firstGrading < 75? "red":""}>{grade.firstGrading}</Td>
              <Td color={grade.secondGrading < 75? "red":""}>{grade.secondGrading}</Td>
              <Td color={grade.thirdGrading < 75? "red":""}>{grade.thirdGrading}</Td>
              <Td color={grade.fourthGrading < 75? "red":""}>{grade.fourthGrading}</Td>
              <Td>{computeAverage(grade.firstGrading+grade.secondGrading+grade.thirdGrading+grade.fourthGrading)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <Text>Final Average: {Number(finalAverage/subjects.length).toFixed(2)}</Text>
    </>
  );
}
