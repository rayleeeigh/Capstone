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
import { CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useS3Upload } from 'next-s3-upload';
import React, { useEffect, useState } from 'react';
import CardComponent from '../../../../components/Admin/CardComponent';
import { SectionInterface } from '../../../../interfaces/SectionInterface';
import AddSectionModal from './components/AddSectionModal';
import AddYearModal from './components/AddYearModal';
import SectionCard from './components/SectionCard';

function DashboardScreen() {
  const [imageUrl, setImageUrl] = useState('');
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [sections, setSections] = useState<SectionInterface[]>([]);

  useEffect(() => {
    axios.get('/api/sections').then((res) => {
      setSections(res.data);
    });
    console.log(sections)
  }, [refreshList]);

  const handleFileChange = async (file) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  return (
    <Flex flexDir="column" w="60vw" alignItems="center">
      <FileInput onChange={handleFileChange} />
      <button onClick={openFileDialog}>Upload file</button>

      {imageUrl && <img src={imageUrl} />}
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
            <AddSectionModal setRefreshList={setRefreshList} refreshList = {refreshList} />
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
              <SimpleGrid columns={3} spacing={10}>
                {sections.filter((data) => data.year_level === 10).length ===
                0
                  ? 'NO SECTIONS'
                  : sections
                      .filter((data) => data.year_level === 10)
                      .map((data) => <SectionCard key={data.section_id} section={data} />)}
              </SimpleGrid>
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
              <SimpleGrid columns={3} spacing={10}>
                {sections.filter((data) => data.year_level === 9).length === 0
                  ? 'NO SECTIONS'
                  : sections
                      .filter((data) => data.year_level === 9)
                      .map((data) => <SectionCard key={data.section_id} section={data} />)}
              </SimpleGrid>
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
              <SimpleGrid columns={3} spacing={10}>
                {sections
                  .filter((data) => data.year_level === 8)
                  .map((data) => (
                    <SectionCard key={data.section_id} section={data} />
                  ))}
              </SimpleGrid>
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
              <SimpleGrid columns={3} spacing={10}>
                {sections
                  .filter((data) => data.year_level === 7)
                  .map((data) => (
                    <SectionCard key={data.section_id} section={data} />
                  ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default DashboardScreen;
