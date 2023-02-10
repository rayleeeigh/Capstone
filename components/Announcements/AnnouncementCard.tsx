import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { AnnouncementInterface } from '../../interfaces/AnnouncementInterface';

export default function AnnouncementCard({
  announcement,
}: {
  announcement: AnnouncementInterface;
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
