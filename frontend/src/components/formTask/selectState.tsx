import { FormControl, FormLabel, FormErrorMessage, Select } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const SelectState: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="tags" isRequired>
    <FormLabel>Estado</FormLabel>
    <Select
      outline='none'
      focusBorderColor='gray.600'
      {...register}
     >
        <option value="concluido">Concluído</option>
        <option value="nao-concluido">Não Concluído</option>
      </Select>
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
