import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputTags: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="tags" isRequired>
    <FormLabel>Tags</FormLabel>
    <Input
      type="text"
      outline='none'
      focusBorderColor='gray.600'
      placeholder='Escolha uma tag para sua tarefa'
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
