import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface InputProps {
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputPhoneNumber: React.FC<InputProps> = ({ register, error }) => {
  return (
    <FormControl id="mobileNumber" isRequired>
      <FormLabel>Numero de celular</FormLabel>
      <InputMask mask="(99) 99999-9999" {...register as any}>
        {(props: any) => 
          <Input
            {...props}
            type="tel"
            outline='none'
            focusBorderColor='gray.600'
            placeholder='(99) 99999-9999'
          />
        }
      </InputMask>
      <FormErrorMessage>
          {error}
      </FormErrorMessage>
    </FormControl>
  );
};
