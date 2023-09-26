import { FormControl, FormLabel, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputDescription: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="description" isRequired>
    <FormLabel>Descrição</FormLabel>
    <Textarea
      outline='none'
      focusBorderColor='gray.600'
      placeholder='Digite uma descrição para sua tarefa'
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
