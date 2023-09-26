import { taskService } from '@/services/taskAPI';
import { UseToastOptions } from "@chakra-ui/react";
// import { IUserFormData } from '@/types/user';

export const handleTaskRegistration = async (
  data: any,
  toast: (options: UseToastOptions) => void,
) => {
  try {
    await taskService.createTasks(data);
    toast({
      title: "Sucesso",
      description: "Tarefa criada com sucesso",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
