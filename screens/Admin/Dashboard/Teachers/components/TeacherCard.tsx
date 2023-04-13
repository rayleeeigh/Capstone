import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { AccountInterface } from '../../../../../interfaces/AccountInterface';
import TeacherInterface from '../../../../../interfaces/TeacherInterface';

interface TeacherAccount extends AccountInterface, TeacherInterface {
  dummy: 0;
}

function TeacherCard({ teacher }: { teacher: TeacherAccount }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            {teacher?.first_name} {teacher?.last_name}
          </Heading>
          <Text>{teacher.position}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Edit now
          </Button>
          <Button variant="ghost" colorScheme="red">
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default TeacherCard;
