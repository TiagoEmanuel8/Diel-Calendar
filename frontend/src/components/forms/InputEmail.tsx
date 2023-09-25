import { ILoginFormData } from "@/types/login";
import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputEmailProps {
  register: any;
  // register: UseFormRegisterReturn;

  error?: string;
}

export const InputEmail: React.FC<InputEmailProps> = ({ register, error }) => (
  <FormControl id="email" isRequired>
    <FormLabel>Email</FormLabel>
    <Input
      type="email"
      outline='none'
      focusBorderColor='gray.600'
      placeholder='exemplo@email.com'
      {...register('email')}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
