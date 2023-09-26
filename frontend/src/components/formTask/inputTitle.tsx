import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputTitle: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="title" isRequired>
    <FormLabel>Título</FormLabel>
    <Input
      type="text"
      outline='none'
      focusBorderColor='gray.600'
      placeholder='Digite título da sua tarefa'
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
