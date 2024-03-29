import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AccountInterface } from '../../../../../interfaces/AccountInterface';
import StudentInterface from '../../../../../interfaces/StudentInterface';

interface StudentAccount extends AccountInterface, StudentInterface {
  dummy: 0;
}

function StudentCard({ student }: { student: StudentAccount }) {
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
            {student?.first_name} {student?.last_name}
          </Heading>
          <Text>Grade-{student.year_level}</Text>
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

export default StudentCard;
