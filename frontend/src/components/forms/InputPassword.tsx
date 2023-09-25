import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from 'react';

interface InputProps {
  // register: UseFormRegisterReturn;
  register: any;
  error?: string;
}

export const InputPassword: React.FC<InputProps> = ({ register, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl id="password" isRequired>
      <FormLabel>Senha</FormLabel>
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          outline='none'
          focusBorderColor='gray.600'
          placeholder='digite sua senha'
          {...register('password')}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>
          {error}
      </FormErrorMessage>
    </FormControl>
  );
};
