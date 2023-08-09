import axios from 'axios';

import { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';
import { SigninFormInputs } from '@/components/forms/SigninForm/SigninForm';

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
  const result = await instance.post('/users/signup', { ...userData });
  const { data, status } = result;
  return { data, status };
};

export const signin = async (userData: SigninFormInputs) => {
  const { data } = await instance.post('/users/signin', { ...userData });
  return data;
};
