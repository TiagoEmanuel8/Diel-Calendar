// src/components/tableTask.tsx

import { Box, Table, Thead, Tbody, Tr, Th, Td, VStack, Text, Button, Flex, Select } from '@chakra-ui/react';
// import { Trash } from '@chakra-ui/icons';
import { FaTrash } from 'react-icons/fa';

export const TaskTable = () => {
  const tasks = [
    { title: 'Tarefa 1', category: 'Trabalho', date: '2023-09-10', duration: '2 horas', description: 'Descrição da tarefa 1' },
    // ... outros dados fictícios
  ];

  return (
    <VStack spacing={6} w="100%" mt={5}>
      <Flex justifyContent="space-between" w="100%">
        <Text fontSize="lg" fontWeight="bold">Tarefas criadas</Text>
        <Box>
          <Text>Ordernar por mês</Text>
          <Select placeholder="Selecione...">
            {/* ... opções de meses */}
          </Select>
        </Box>
      </Flex>

      {tasks.length === 0 ? (
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">Você ainda não tem tarefas cadastradas</Text>
          <Text>Crie tarefas e organize seus itens a fazer</Text>
        </Box>
      ) : (
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Categoria</Th>
              <Th>Data</Th>
              <Th>Duração</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((task, index) => (
              <Tr key={index}>
                <Td>{task.title}</Td>
                <Td>{task.category}</Td>
                <Td>{task.date}</Td>
                <Td>{task.duration}</Td>
                <Td>
                <Button leftIcon={<FaTrash />} variant="ghost" colorScheme="red" onClick={() => {/* Função de deletar */}}>
                  Deletar
              </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </VStack>
  );
};
