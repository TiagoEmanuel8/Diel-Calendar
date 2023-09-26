import { decodeToken } from '@/utils/decodeToken';
import axios, { AxiosError } from 'axios';

interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;

const createTasks = async (data: any) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found in localStorage');
  }

  const decoded = decodeToken(token);
  if (!decoded || !decoded.id) {
    throw new Error('Failed to decode token or id not present in token');
  }

  const userId = decoded.id;

  try {
    const payload = {
      ...data,
      userId
    };
  
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      throw new Error(axiosError.response?.data.message);
    }
    throw error;
  }
};

const getTask = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      throw new Error(axiosError.response?.data.message);
    }
    throw error;
  }
};

const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      throw new Error(axiosError.response?.data.message);
    }
    throw error;
  }
};

export const taskService = {
  createTasks,
  getTasks,
  getTask
};
