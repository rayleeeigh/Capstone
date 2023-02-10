import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { announcementType } from '../../constants/announcementType';
import { AnnouncementInterface } from '../../interfaces/AnnouncementInterface';

interface Props{
  refreshList : boolean;
  setRefreshList : Dispatch<SetStateAction<boolean>>;
}

export const AnnouncementAddModal:FC<Props> = ({refreshList,setRefreshList}) => {
  const [announcement, setAnnouncement] = useState<AnnouncementInterface>({
    type: announcementType.everyone,
  } as AnnouncementInterface);
  const [isError, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(AuthContext);
  const toast = useToast();

  useEffect(() => {
    if(isOpen){
        setAnnouncement({  type: announcementType.everyone } as AnnouncementInterface);
        setError(false)
    }
    
  }, [isOpen])
  

  const addAnnouncement = async () => {
    if (
      !announcement.title ||
      !announcement.content ||
      !announcement.title.trim() ||
      !announcement.content.trim()
    ) {
      setError(true);
      return;
    }

    axios
      .post('api/announcements/postAnnouncements', { announcement, user })
      .then(() => {
        setRefreshList(!refreshList)
        toast({
          title: 'Success',
          description: 'Announcement Successfully created.',
          status: 'success',
          duration: 5000,
          position: 'top',
        });
        onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Add Announcement</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl isInvalid={isError}>
              <FormLabel>Title:</FormLabel>
              <Input
                type="text"
                onChange={(e) =>
                  setAnnouncement((prevState) => ({
                    ...prevState,
                    title: e.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl isInvalid={isError}>
              <FormLabel>Content:</FormLabel>
              <Input
                type="text"
                onChange={(e) =>
                  setAnnouncement((prevState) => ({
                    ...prevState,
                    content: e.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl isInvalid={isError}>
              <FormLabel>Type:</FormLabel>
              <Select
                onChange={(e) =>
                  setAnnouncement((prevState) => ({
                    ...prevState,
                    type: Number(e.target.value),
                  }))
                }
              >
                <option value={announcementType.everyone}>Everyone</option>
                <option value={announcementType.teachers}>
                  For Teachers Only
                </option>
                <option value={announcementType.admins}>For Admins</option>
              </Select>
            </FormControl>
            {isError && (
              <Text mt="1rem" color="red.400">
                Input Correct Fields
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={addAnnouncement}>
              ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
