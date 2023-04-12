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
import React, { Dispatch, SetStateAction } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../../../../../components/Input/FormInput';

function AddSubjectModal({
  setRefreshList,
  refreshList,
}: {
  setRefreshList: Dispatch<SetStateAction<boolean>>;
  refreshList: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    try {
      axios
        .post('/api/subjects/addSubject', { subject: values })
        .then(() => {
          toast({
            title: 'Success',
            description: 'Subject Successfully created.',
            status: 'success',
            duration: 5000,
            position: 'top',
          });
          onClose();
          setRefreshList(!refreshList);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
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
              <Flex flexDirection="column" gap="1rem">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormInput
                      formControlProps={null}
                      formLabelProps={null}
                      title="Name of Section"
                    >
                      <Input {...field} placeholder="Name" />
                      {errors.name && (
                        <Text color="red">This field is required</Text>
                      )}
                    </FormInput>
                  )}
                />
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormInput
                      formControlProps={null}
                      formLabelProps={null}
                      title="Name of Section"
                    >
                      <Input {...field} placeholder="Name" />
                      {errors.name && (
                        <Text color="red">This field is required</Text>
                      )}
                    </FormInput>
                  )}
                />
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormInput
                      formControlProps={null}
                      formLabelProps={null}
                      title="Name of Section"
                    >
                      <Input {...field} placeholder="Name" />
                      {errors.name && (
                        <Text color="red">This field is required</Text>
                      )}
                    </FormInput>
                  )}
                />
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit">
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSubjectModal;
