import { createAsyncThunk } from '@reduxjs/toolkit';

import { signup } from '@/service/externalApi';

import { SignupFormInputs } from '@/components/forms/SignupForm/SignupForm';

export const signupNewUser = createAsyncThunk(
  'auth/signup',
  async (userData: SignupFormInputs, { rejectWithValue }) => {
    try {
      const data = await signup(userData);
      if (data.message) {
        return true;
      }
      return false;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);
