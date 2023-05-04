import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormLabel,
  FormHelperText,
  FormControl,
  useToast,
  Text,
} from '@chakra-ui/react';
import { DatePicker, Form, InputNumber, Select } from 'antd';
import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Input } from '../../../../../components/Input/FormInput';
import TeacherInterface from '../../../../../interfaces/TeacherInterface';
import { validateInput } from '../../../../../utils/validateInput';

const { Option } = Select;

function AddTeacherModal({
  setRefreshList,
  refreshList,
}: {
  setRefreshList: Dispatch<SetStateAction<boolean>>;
  refreshList: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [teacher, setTeacher] = useState<TeacherInterface>(
    {} as TeacherInterface
  );
  const toast = useToast();
  const [form] = Form.useForm();

  const onSubmit = () => {
    console.log(teacher);
    // try {
    //   axios
    //     .post('/api/subjects/addSubject', { subject })
    //     .then(() => {
    //       toast({
    //         title: 'Success',
    //         description: 'Subject Successfully created.',
    //         status: 'success',
    //         duration: 5000,
    //         position: 'top',
    //       });
    //       onClose();
    //       setRefreshList(!refreshList);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <>
      <Button onClick={onOpen}>Add Teacher</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Form form={form} onFinish={onSubmit} layout="vertical">
            <ModalHeader>Add a Teacher</ModalHeader>
            <ModalBody>
              <Flex flexDirection="column" gap="0.5rem">
                <Input.Admin
                  formItemProps={{
                    name: 'first_name',
                    label: 'First Name',
                    rules: [
                      {
                        required: true,
                        validator: (_, value) => {
                          return validateInput(value, 'First name');
                        },
                      },
                    ],
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setTeacher((prevState) => ({
                        ...prevState,
                        first_name: e.target.value,
                      }));
                    },
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'middle_name',
                    label: 'Middle Name',
                    rules: [],
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setTeacher((prevState) => ({
                        ...prevState,
                        middle_name: e.target.value,
                      }));
                    },
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'last_name',
                    label: 'Last Name',
                    rules: [
                      {
                        required: true,
                        validator: (_, value) => {
                          return validateInput(value, 'Last name');
                        },
                      },
                    ],
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setTeacher((prevState) => ({
                        ...prevState,
                        last_name: e.target.value,
                      }));
                    },
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'suffix',
                    label: 'Suffix',
                    rules: [],
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setTeacher((prevState) => ({
                        ...prevState,
                        suffix: e.target.value,
                      }));
                    },
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'gender',
                    label: 'Gender',
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        validator: (_, value) => {
                          return validateInput(value, 'Gender');
                        },
                      },
                    ],
                    children: (
                      <>
                        <Select
                          placeholder="Select Gender"
                          onChange={(e) => {
                            setTeacher((prevState) => ({
                              ...prevState,
                              gender: e.target.value,
                            }));
                          }}
                        >
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                        </Select>
                      </>
                    ),
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'birthdate',
                    label: 'Birthdate',
                    rules: [
                      {
                        required: true,
                        message: 'Birthdate is required',
                      },
                    ],
                    children: (
                      <DatePicker
                        popupStyle={{
                          zIndex: 2000,
                        }}
                        inputReadOnly={true}
                        style={{ width: '100%' }}
                        onChange={(e) => {
                          setTeacher((prevState) => ({
                            ...prevState,
                            birthdate: e?.toISOString() as string,
                          }));
                        }}
                      />
                    ),
                  }}
                />

                <Input.Admin
                  formItemProps={{
                    name: 'age',
                    label: 'Age',
                    rules: [
                      {
                        required: true,
                        message: 'Age is required',
                      },
                    ],
                    children: (
                      <InputNumber
                        style={{ width: '100%' }}
                        onChange={(e: number) => {
                          setTeacher((prevState) => ({
                            ...prevState,
                            age: e,
                          }));
                        }}
                      />
                    ),
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'contact_no',
                    label: 'Contact',
                    rules: [
                      {
                        required: true,
                        validator: (_, value) => {
                          return validateInput(value, 'Contact');
                        },
                      },
                    ],
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setTeacher((prevState) => ({
                        ...prevState,
                        contact_no: e.target.value,
                      }));
                    },
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'marital_status',
                    label: 'Marital Status',
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        validator: (_, value) => {
                          return validateInput(value, 'Marital Status');
                        },
                      },
                    ],
                    children: (
                      <>
                        <Select
                          placeholder="Select Marital Status"
                          onChange={(e) => {
                            setTeacher((prevState) => ({
                              ...prevState,
                              marital_status: e.target.value,
                            }));
                          }}
                        >
                          <Option value="single">Single</Option>
                          <Option value="married">Married</Option>
                          <Option value="separated">Separated</Option>
                          <Option value="divorced">Divorced</Option>
                          <Option value="windowed">Widowed</Option>
                        </Select>
                      </>
                    ),
                  }}
                />
                <Input.Admin
                  formItemProps={{
                    name: 'position',
                    label: 'Position',
                    rules: [
                      {
                        required: true,
                        validator: (_, value) => {
                          return validateInput(value, 'Position');
                        },
                      },
                    ],
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setTeacher((prevState) => ({
                        ...prevState,
                        position: e.target.value,
                      }));
                    },
                  }}
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
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddTeacherModal;
