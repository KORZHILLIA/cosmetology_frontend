import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import extractAxiosErrorMessage from '@/helpers/extractAxiosErrorMessage';
import { signup, signin } from '@/service/externalApi';

import { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';
import { SigninFormInputs } from '@/components/forms/SigninForm/SigninForm';

export const signupNewUser = createAsyncThunk(
  'auth/signup',
  async (userData: SignupFormInputs, { rejectWithValue }) => {
    try {
      const { data, status } = await signup(userData);
      alert(data.message);
      return status === 201;
    } catch (error: any) {
      const axiosError = error as AxiosError;
      const errorMessage = extractAxiosErrorMessage(axiosError);
      return rejectWithValue(errorMessage);
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
      const errorMessage = extractAxiosErrorMessage(axiosError);
      return rejectWithValue(errorMessage);
    }
  }
);
