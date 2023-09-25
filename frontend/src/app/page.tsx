"use client"

import { Flex, Box, Stack, Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { InputEmail, InputPassword } from '@/components/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { onSubmitHandler } from '@/handlers/loginHandlers';
import { ILoginFormData } from '@/types/login';
import { useRouter } from 'next/navigation';
import { useToast } from "@chakra-ui/react";

const schema = yup.object({
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export default function Home() {
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginFormData) => {
    console.log(data)
    onSubmitHandler(data, toast, router);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <InputEmail register={register('email')} error={errors.email?.message} />
              <InputPassword register={register('password')} error={errors.password?.message} />

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"center"}
                >
                  <Button as="a" color={"blue.400"} href="/user/register" variant={"link"}>
                    Criar conta
                  </Button>
                </Stack>
                <Button
                  type='submit'
                  width='full'
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
