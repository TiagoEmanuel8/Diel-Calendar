"use client"

import { Flex, Box, Button, useToast, VStack } from '@chakra-ui/react';
import { InputTitle, InputDescription, InputTimes, SelectTags, InputDuration, SelectState } from '@/components/formTask';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { handleTaskRegistration } from '@/handlers/taskHandler';
import { TaskTable } from '@/components/tableTask';
import { decodeToken } from '@/utils/decodeToken';

const CalendarPage = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();
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
            <Box w="30%">
              <SelectState register={register('state')} />
            </Box>
            <Box w="30%">
              <InputDuration register={register('duration')} />
            </Box>
            <Box w="30%">
              <SelectTags register={register('tags')} />
            </Box>
          </Flex>
          <InputTimes register={register('times')} />
          <Button colorScheme="blue" type="submit" mt={4} isLoading={isLoading}>Adicionar Tarefa</Button>
        </VStack>
      </Box>

      <TaskTable />
    </Flex>
  );
};

export default CalendarPage;
