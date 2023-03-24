import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

function CardComponent() {
  return (
    <Flex
      flexDirection="row"
      gap="1rem"
      padding="1rem"
      borderWidth="5px"
      m="1rem"
      borderRadius="xl"
    >
      <Text>Student pic</Text>
      <Flex flexDirection="column">
        <Text>STUDENTS</Text>
        <Text>50</Text>
      </Flex>
    </Flex>
  );
}

export default CardComponent;
