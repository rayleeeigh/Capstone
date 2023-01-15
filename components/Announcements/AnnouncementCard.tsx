import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

export default function AnnouncementCard({
  announcement,
}: {
  announcement: any;
}) {
  return (
    <>
      <Flex alignItems="center">
        <Avatar size="sm" mr="1vw" />
        <Text fontWeight="bold">{announcement.title}</Text>
      </Flex>
      <Text>{announcement.content}</Text>
    </>
  );
}
