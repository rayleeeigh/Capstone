import { Flex } from '@chakra-ui/react';
import { DatePicker, InputNumber, Select } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { FC } from 'react';
import { Input } from '../../../../../../components/Input/FormInput';
import { LearnerInfoInterface } from '../../../../../../interfaces/LearnerInfoInterface';
import { validateInput } from '../../../../../../utils/validateInput';

const { Option } = Select;

function LearnerInfoForm({
  setLearnerInfo,
}: {
  setLearnerInfo: Dispatch<SetStateAction<LearnerInfoInterface>>;
}) {
  return (
    <Flex flexDirection="column" gap="0.5rem" width="100%">
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
            setLearnerInfo((prevState) => ({
              ...prevState,
              first_name: e.target.value,
            }));
          },
          width: '100%',
        }}
      />
      <Input.Admin
        formItemProps={{
          name: 'middle_name',
          label: 'Middle Name',
          rules: [
            {
              required: true,
              validator: (_, value) => {
                return validateInput(value, 'Middle name');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
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
            setLearnerInfo((prevState) => ({
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
          rules: [
            {
              validator: (_, value) => {
                return validateInput(value, 'Suffix');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
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
                  setLearnerInfo((prevState) => ({
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
                setLearnerInfo((prevState) => ({
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
                setLearnerInfo((prevState) => ({
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
            setLearnerInfo((prevState) => ({
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
                  setLearnerInfo((prevState) => ({
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
          name: 'psa_birth_cert',
          label: 'PSA BIRTH CERT',
          rules: [
            {
              required: true,
              validator: (_, value) => {
                return validateInput(value, 'PSA BIRTH CERT');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
              ...prevState,
              psa_birth_cert: e.target.value,
            }));
          },
        }}
      />
      <Input.Admin
        formItemProps={{
          name: 'place_of_birth',
          label: 'Place of Birth',
          rules: [
            {
              required: true,
              validator: (_, value) => {
                return validateInput(value, 'Place of Birth');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
              ...prevState,
              place_of_birth: e.target.value,
            }));
          },
        }}
      />
      <Input.Admin
        formItemProps={{
          name: 'mother_tounge',
          label: 'Mother Tounge',
          rules: [
            {
              required: true,
              validator: (_, value) => {
                return validateInput(value, 'Mother Tounge');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
              ...prevState,
              mother_tongue: e.target.value,
            }));
          },
        }}
      />
      <Input.Admin
        formItemProps={{
          name: 'indigenous',
          label: 'Indigenous',
          rules: [
            {
              required: true,
              validator: (_, value) => {
                return validateInput(value, 'Indigenous');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
              ...prevState,
              indigenous: e.target.value,
            }));
          },
        }}
      />
      <Input.Admin
        formItemProps={{
          name: '4ps_no',
          label: '4ps No.',
          rules: [
            {
              required: true,
              validator: (_, value) => {
                return validateInput(value, '4ps No.');
              },
            },
          ],
        }}
        inputProps={{
          onChange: (e) => {
            setLearnerInfo((prevState) => ({
              ...prevState,
              '4ps_no': e.target.value,
            }));
          },
        }}
      />
    </Flex>
  );
}

export default LearnerInfoForm;
