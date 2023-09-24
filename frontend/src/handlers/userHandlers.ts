import { userService } from '@/services/userAPI';
import { UseToastOptions } from "@chakra-ui/react";

export const handleUserRegistration = async (
  data: any,
  toast: (options: UseToastOptions) => void,
  router: any
) => {
  try {
    await userService.createUser(data);
    toast({
      title: "Sucesso",
      description: "Usuário criado com sucesso",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push('/');
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
