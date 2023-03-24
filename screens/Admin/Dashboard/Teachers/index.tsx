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
import React, { useState } from 'react';
import CardComponent from '../../../../components/Admin/CardComponent';
import AddTeacherModal from './components/AddTeacherModal';
import TeacherCard from './components/TeacherCard';

function SubjectsScreen() {
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
            <AddTeacherModal />
          </Flex>

          <SimpleGrid columns={3} spacing={10}>
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SubjectsScreen;
