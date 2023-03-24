import { Flex, Spacer, Text } from '@chakra-ui/layout';
import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function CardComponent({ title }: { title: string }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="elevated"
      h="5rem"
      w="15rem"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody p="5px">
          <Heading size="md">{title}</Heading>
        </CardBody>

        <CardFooter p="5px" w="7.5rem">
          <Spacer />
          <Link href={`/admin/Dashboard/${title}`}>
            <Text fontSize="xs" color="blue.500" cursor="pointer">
              See More
            </Text>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CardComponent;
