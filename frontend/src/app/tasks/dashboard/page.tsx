"use client"
// src/app/tasks/dashboard/page.tsx

import { Flex, Text, Box, Button, useToast, VStack, Textarea, Select, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { InputTitle, InputDescription, inputTimes, InputTags, InputDuration, SelectState } from '@/components/formTask';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { handleTaskRegistration } from '@/handlers/taskHandler';
import { TaskTable } from '@/components/tableTask';
import { decodeToken } from '@/utils/decodeToken';

const CalendarPage = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: any) => {
    console.log(data);
    setIsLoading(true);
    await handleTaskRegistration(data, toast);
    setIsLoading(false);
  };

  return (
    <Flex
      direction={["column", "column", "column", "column"]} 
      p={[2, 4, 5]} 
      w={["100%", "90%", "80%", "73.6rem"]} 
      m="auto"
    >
      <Box as="form" onSubmit={handleSubmit(onSubmit)} mt={5}>
        <VStack spacing={4}>
          <InputTitle register={register('title')} />
          <InputDescription register={register('description')} />
          <Flex w="100%" justifyContent="space-between">
            <Box w="48%">
              <SelectState register={register('state')} />
            </Box>
            <Box w="48%">
              <Input placeholder="Duração" type="number" />
          </Box>
          </Flex>
          <Input placeholder="Data e Hora" type="datetime-local" w="100%" />
          <Button colorScheme="blue" mt={4} type="submit" isLoading={isLoading}>Adicionar Tarefa</Button>
        </VStack>
      </Box>

      <TaskTable />
    </Flex>
  );
};

export default CalendarPage;
