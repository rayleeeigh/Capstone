import { Box, Button, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, UnorderedList, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SectionInterface } from '../interfaces/SectionInterface';
import StudentInterface from '../interfaces/StudentInterface';
import Layout from '../layouts/layout';
import arrayShuffle from 'array-shuffle';
import { assignSection } from '../lib/students';

export default function Schedule() {
const [enrolled, setEnrolled] = useState(1);
const [gradeLevel, setGradeLevel] = useState(0)
const [selectedSection, setSelectedSection] = useState(0)
const [students, setStudents] = useState<StudentInterface[]>([])
const [sections, setSections] = useState<SectionInterface[]>([])
const [array, setArray] = useState([])
const { isOpen, onOpen, onClose } = useDisclosure();

function getStudents(){
    axios
      .get('api/sections').then(function (response) {
        setSections(response.data)
    });
    axios
      .get('api/students/getStudentsByEnrolledStatus', {
        params: {
          enrolled: enrolled,
          gradeLevel: gradeLevel,
          section: selectedSection
        },
      })
      .then(function (response) {
        setStudents(response.data)
        setArray(arrayShuffle(Array.from(Array(response.data.length).keys())))
      });
}

function assignSection(){
  axios
      .post('api/students/assignSection', {array, students})
      .then(function (response) {
        console.log('')
      });
}

useEffect(() => {
  getStudents()
}, [enrolled, gradeLevel, selectedSection])

    
  return (
    <Layout>
      <Flex
        mt="4vh"
        w="80vw"
        h="80vh"
        bg="white"
        boxShadow="lg"
        alignItems="center"
        flexDirection="column"
      >
       <Flex>
            <Box w="40vw" h="80vh" p="8">
                <Text size="2xl" mb="4">Student Status</Text>
                <Select mb="4" w="80" onChange={(e)=>{setEnrolled(+e.target.value); setGradeLevel(0); setSelectedSection(0)}}>
                    <option value="1">Enrolled</option>
                    <option value="0">Not Enrolled</option>
                </Select>
                {enrolled === 1 ?
                (
                    <>
                        <Text size="2xl" mb="4">Grade Level</Text>
                        <Select mb="4" w="80" placeholder='All Grade Level' onChange={(e)=>{setGradeLevel(+e.target.value); setSelectedSection(0)}}>
                            <option value="7">Grade 7</option>
                            <option value="8">Grade 8</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                        </Select>
                        <Text size="2xl" mb="4">Section</Text>
                        <Select w="80" placeholder='All Sections' onChange={(e)=>setSelectedSection(+e.target.value)}>
                            {sections.map((section)=>{
                                if (section.section_year === gradeLevel){
                                    return (
                                        <option value={section.section_id}>{section.section_name}</option>
                                    )
                                }
                            })}
                        </Select>
                    </>
                )
                :
                <Button onClick={onOpen}>Generate Enrollment</Button>
                }
            </Box>
            <Box bg="red.100" w="40vw" h="80vh" p="8">
                {students.map((student)=>(
                    <p key={student.student_id}>{`${student.first_name} ${student.last_name} - ${sections.find(section=> section.section_id === student.enrolled)? sections.find(section=> section.section_id === student.enrolled).section_name : 'Unenrolled'}`}</p>
                ))}
            </Box>
        </Flex> 
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Assign these unenrolled students to a section?</p>
            <UnorderedList>
            {students.map(student=>(
                <li key={student.student_id}>{`${student.first_name} ${student.last_name}`}</li>
            ))}
            </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'>Close</Button>
            <Button colorScheme='blue' mr={3} onClick={()=>{assignSection();onClose()}}>
              Assign
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
}
