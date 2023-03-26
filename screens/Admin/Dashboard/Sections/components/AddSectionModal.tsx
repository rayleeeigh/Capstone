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
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../../../../../components/Input/FormInput';

function AddSectionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = (values) => {
    console.log(values);
    try {
      axios
        .post('/api/sections/addSection', { section: values })
        .then(() => {
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
    } catch (err) {
      console.error(err);
    }
  };

  // const onSubmit = async (values) => {
  //   console.log(values);
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       alert(JSON.stringify(values, null, 2));
  //       resolve();
  //     }, 3000);
  //   });
  // };

  return (
    <>
      <Button onClick={onOpen}>Add Section</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add a Section</ModalHeader>
            <ModalBody>
              <Flex flexDirection="column" gap="1rem">
                <Controller
                  name="section_name"
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
                  name="section_year"
                  control={control}
                  defaultValue="7"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormInput
                      formControlProps={null}
                      formLabelProps={null}
                      title="Select Year"
                    >
                      <Select {...field}>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </Select>
                      {errors.grade && (
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

export default AddSectionModal;
