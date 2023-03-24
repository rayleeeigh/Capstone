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
import { useS3Upload } from 'next-s3-upload';
import React, { useState } from 'react';
import CardComponent from '../../../../components/Admin/CardComponent';
import AddSectionModal from './components/AddSectionModal';
import AddYearModal from './components/AddYearModal';
import SectionCard from './components/SectionCard';

function DashboardScreen() {
  const [imageUrl, setImageUrl] = useState('');
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async (file) => {
    let { url } = await uploadToS3(file);
    console.log(url);
    setImageUrl(url);
  };

  return (
    <>
      <FileInput onChange={handleFileChange} />
      <button onClick={openFileDialog}>Upload file</button>

      {imageUrl && <img src={imageUrl} />}
      <Image
        src=" https://eskwela-image-uploads.s3.ap-southeast-2.amazonaws.com/next-s3-uploads/f1b2e5ef-7777-4f00-9fe5-63ca8be035e4/dogs-exercise.jpg"
        alt="s3-upload"
      />
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
            <AddSectionModal />
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
                <SectionCard />
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
                <SectionCard />
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
                <SectionCard />
                <SectionCard />
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
                <SectionCard />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
}

export default DashboardScreen;
