import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import extractAxiosError from '@/helpers/extractAxiosError';
import { signup, signin, getCurrent } from '@/service/externalApi';

import { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';
import { SigninFormInputs } from '@/components/forms/SigninForm/SigninForm';

export const signupNewUser = createAsyncThunk(
  'auth/signup',
  async (userData: SignupFormInputs, { rejectWithValue }) => {
    try {
      const { data, status } = await signup(userData);
      alert(data.message);
      return status === 201;
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);

export const signinUser = createAsyncThunk(
  'auth/signin',

  async (userData: SigninFormInputs, { rejectWithValue }) => {
    try {
      const data = await signin(userData);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 400) {
        alert('Wrong password');
      }
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrent',

  async (accessToken: string, { rejectWithValue }) => {
    try {
      const data = await getCurrent(accessToken);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);