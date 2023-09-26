import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputDuration: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="duration" isRequired>
    <FormLabel>Duração</FormLabel>
    <Input
      outline='none'
      focusBorderColor='gray.600'
      placeholder='Digite uma duração para sua tarefa'
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
