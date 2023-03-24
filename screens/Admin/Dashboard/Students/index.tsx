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
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/layout';
import React, { useState } from 'react';
import CardComponent from '../../../../components/Admin/CardComponent';
import AddStudentsModal from './components/AddStudentModal';
import StudentCard from './components/StudentCard';

function DashboardScreen() {
  return (
    <Flex flexDir="column" w="60vw" alignItems="center">
      <Flex>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Flex>
      <Flex
        borderWidth="1px"
        padding="1rem"
        flexDirection="column"
        gap="1rem"
        w="60vw"
      >
        <Flex>
          <Heading size="md">YEAR LEVELS</Heading>
          <Spacer />
          <Flex gap="1rem">
            <AddStudentsModal />
          </Flex>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Grade 10
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Flex>
                <StudentCard />
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Grade 9
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Flex gap="1rem">
                <StudentCard />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Grade 8
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Flex gap="1rem">
                <StudentCard />
                <StudentCard />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Grade 7
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Flex>
                <StudentCard />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default DashboardScreen;
