import jwt from 'jsonwebtoken';
import { loginService } from '@/services/loginAPI';
import { ILoginFormData, ISubmitFormLogin } from '@/types/login';
import { UseToastOptions } from "@chakra-ui/react";


export const onSubmitHandler = async (
    data: ILoginFormData,
    toast: (options: UseToastOptions) => void,
    router: any
  ) => {
  try {
    const token = await loginService.login(data);
    localStorage.setItem('token', token);
    toast({
      title: "Sucesso",
      description: "Login realizado com sucesso",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push('/tasks/dashboard');
  } catch (error: any) {
    toast({
      title: "Erro",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};
