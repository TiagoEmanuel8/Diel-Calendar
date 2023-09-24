import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputPhoneNumber: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="phoneNumber" isRequired>
    <FormLabel>Numero de celular</FormLabel>
    <Input
      type="tel"
      outline='none'
      focusBorderColor='gray.600'
      placeholder='(99) 99999-9999'
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
