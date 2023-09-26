import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputName: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="name" isRequired>
    <FormLabel>Nome Completo</FormLabel>
    <Input
      type="text"
      outline='none'
      focusBorderColor='gray.600'
      placeholder='Digite nome completo'
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
