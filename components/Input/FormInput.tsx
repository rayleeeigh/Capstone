import { FormControlProps, FormLabelProps } from '@chakra-ui/form-control';
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface FormItemsInputProps {
  formControlProps: FormControlProps;
  formLabelProps: FormLabelProps;
  title: String;
  children: ReactNode;
}

function FormInput({
  formControlProps,
  formLabelProps,
  title,
  children,
}: FormItemsInputProps) {
  return (
    <FormControl {...formControlProps}>
      <FormLabel {...formLabelProps}>{title}</FormLabel>
      {children}
    </FormControl>
  );
}

export default FormInput;
