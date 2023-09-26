import { FormControl, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputTimes: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="times" isRequired>
    <FormLabel>Data e hora</FormLabel>
    <Input
      type="datetime-local"
      w="100%"
      placeholder="Data e Hora"
      {...register}
    />
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);

