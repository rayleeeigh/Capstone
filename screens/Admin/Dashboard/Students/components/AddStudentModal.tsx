import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  FormLabel,
  FormHelperText,
  FormControl,
  useToast,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Steps } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../../../../../components/Input/FormInput';
import { LearnerInfoInterface } from '../../../../../interfaces/LearnerInfoInterface';
import LearnerInfoForm from './Form/LearnerInfoForm';

function AddSubjectModal({
  setRefreshList,
  refreshList,
}: {
  setRefreshList: Dispatch<SetStateAction<boolean>>;
  refreshList: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [learnerInfo, setLearnerInfo] = useState<LearnerInfoInterface>(
    {} as LearnerInfoInterface
  );
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: 'First',
      content: <LearnerInfoForm setLearnerInfo={setLearnerInfo} />,
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Button onClick={onOpen}>Add Subject</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add a Section</ModalHeader>
            <ModalBody>
              <Flex gap="1rem" flexDirection="column">
                <Steps current={current} items={items} />
                {steps[current].content}
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Flex gap="1rem">
                {current < steps.length - 1 && (
                  <Button onClick={() => next()}>Next</Button>
                )}
                {current === steps.length - 1 && (
                  <Button onClick={() => console.log('test')}>Done</Button>
                )}
                {current > 0 && (
                  <Button onClick={() => prev()}>Previous</Button>
                )}
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSubjectModal;
