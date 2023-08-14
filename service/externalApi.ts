import axios from 'axios';

import type { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';
import type { SigninFormInputs } from '@/components/forms/SigninForm/SigninForm';
import type { SignoutBody } from '@/constants/interfaces';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
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

export const getCurrent = async (accessToken: string) => {
  setToken(accessToken);
  const { data } = await instance('/users/current');
  return data;
};

export const signout = async (email: SignoutBody) => {
  const result = await instance.post('/users/signout', { ...email });
  return result;
};
