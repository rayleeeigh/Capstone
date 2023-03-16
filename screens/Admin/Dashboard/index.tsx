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
import { CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';
import CardComponent from './components/CardComponent';
import SectionCard from './components/SectionCard';

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
            <Button>ADD SECTION</Button>
            <Button>ADD SECTION</Button>
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
                <SectionCard/>
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
              <SectionCard/>
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
              <SectionCard/>
              <SectionCard/>
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
              <SectionCard/>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default DashboardScreen;
