"use client"

import React, { useState } from 'react';
import {
  Flex, Box, Stack, Button, Heading, Text, useColorModeValue, useToast, Link
} from "@chakra-ui/react";
import { InputName, InputEmail, InputPassword, InputPhoneNumber } from '@/components/formUser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { handleUserRegistration } from '@/handlers/userHandlers';
import { IUserFormData } from '@/types/user';

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
  mobileNumber: yup.string().required('Campo obrigatório'),
});

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IUserFormData) => {
    setIsLoading(true);
    await handleUserRegistration(data, toast, router);
    setIsLoading(false);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form action="" autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Novo por aqui?
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Cadastre-se abaixo e comece planejar suas atividades
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <InputName register={register('name')} error={errors.name?.message} />
              <InputEmail register={register('email')} error={errors.email?.message} />
              <InputPassword register={register('password')} error={errors.password?.message} />
              <InputPhoneNumber register={register('mobileNumber')} error={errors.mobileNumber?.message} />
              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={isLoading}
                >
                  Cadastrar
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Possui conta? <Link color={"blue.400"} href="/">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
}
