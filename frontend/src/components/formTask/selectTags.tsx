import { FormControl, FormLabel, FormErrorMessage, Select } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const SelectTags: React.FC<InputProps> = ({ register, error }) => (
  <FormControl id="tags" isRequired>
    <FormLabel>Tags</FormLabel>
    <Select
      outline='none'
      focusBorderColor='gray.600'
      {...register}
      >
        <option value="lazer">Lazer</option>
        <option value="compras">Compras</option>
        <option value="estudos">Estudos</option>
        <option value="trabalho">Trabalho</option>
        <option value="financeiro">Financeiro</option>
        <option value="outros">Outros</option>
      </Select>
    <FormErrorMessage>
        {error}
    </FormErrorMessage>
  </FormControl>
);
