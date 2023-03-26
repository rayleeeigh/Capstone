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
import SubjectInterface from '../../../../interfaces/SubjectInterface';
import AddSubjectModal from './components/AddSubjectModal';
import SubjectCard from './components/SubjectCard';

function SubjectsScreen() {
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<SubjectInterface[]>([]);

  useEffect(() => {
    axios.get('/api/subjects').then((res) => {
      setSubjects(res.data);
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
            <Heading size="md">SUBJECTS</Heading>
            <Spacer />
            <AddSubjectModal
              setRefreshList={setRefreshList}
              refreshList={refreshList}
            />
          </Flex>

          <SimpleGrid columns={3} spacing={10}>
            {subjects.map((data) => (
              <SubjectCard key={data.subject_id} subject={data} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SubjectsScreen;
