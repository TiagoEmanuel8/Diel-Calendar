import { useToast } from "@chakra-ui/react";

export const useToastNotification = () => {
  const toast = useToast();

  return (title: string, description: string, status: "info" | "warning" | "success" | "error") => {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };
};
