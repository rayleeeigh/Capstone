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
} from '@chakra-ui/react';
import React from 'react';
import FormInput from '../../../../../components/Input/FormInput';

function AddSectionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Add Section</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add A Section</ModalHeader>
          <ModalBody>
            <Flex flexDirection="column" gap="1rem">
              <FormInput
                formControlProps={null}
                formLabelProps={null}
                title="Name of Section"
              >
                <Input />
              </FormInput>
              <FormInput
                formControlProps={null}
                formLabelProps={null}
                title="Select Year"
              >
                <Select placeholder="Grade">
                  <option value="option1">7</option>
                  <option value="option2">8</option>
                  <option value="option3">9</option>
                </Select>
              </FormInput>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSectionModal;
