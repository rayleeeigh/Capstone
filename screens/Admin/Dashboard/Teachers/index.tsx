import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from '../../../../components/Admin/CardComponent';
import { AccountInterface } from '../../../../interfaces/AccountInterface';
import SubjectInterface from '../../../../interfaces/SubjectInterface';
import TeacherInterface from '../../../../interfaces/TeacherInterface';
import AddSubjectModal from '../Students/components/AddStudentModal';
import SubjectCard from '../Subjects/components/SubjectCard';
import AddTeacherModal from './components/AddTeacherModal';
import TeacherCard from './components/TeacherCard';


interface TeacherAccount extends AccountInterface, TeacherInterface {
  dummy: 0;
}


function TeacherScreen() {
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<TeacherAccount[]>([]);

  useEffect(() => {
    axios.get('/api/teachers/getAllTeachers').then((res) => {
      setTeachers(res.data);
    });
  }, [refreshList]);

  return (
    <Flex flexDir="column" w="60vw" alignItems="center">
      <Flex
        borderWidth="1px"
        padding="1rem"
        flexDirection="column"
        gap="1rem"
        w="60vw"
      >
        <Flex flexDirection="column" gap="1rem">
          <Flex>
            <Heading size="md">TEACHERS</Heading>
            <Spacer />
            <AddTeacherModal
              setRefreshList={setRefreshList}
              refreshList={refreshList}
            />
          </Flex>

          <SimpleGrid columns={3} spacing={10}>
            {teachers.map((data) => (
              <TeacherCard key={data.teacher_id} teacher={data} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TeacherScreen;
