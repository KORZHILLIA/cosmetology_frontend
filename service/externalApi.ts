import axios from 'axios';

import { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const setToken = (token: string) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async (userData: SignupFormInputs) => {
  const { data } = await instance.post('/users/signup', { ...userData });
  return data;
};
