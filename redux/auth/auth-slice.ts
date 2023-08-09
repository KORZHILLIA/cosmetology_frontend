import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { signupNewUser, signinUser } from './auth-operations';

import { ReduxUserState } from '@/constants/interfaces';

const initialState: ReduxUserState = {
  accessToken: '',
  name: '',
  email: '',
  isEmailSent: false,
  isVerified: false,
  futureVisitDates: [],
  pastVisitDates: [],
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return { ...state, ...action.payload.auth };
      })
      .addCase(signupNewUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupNewUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isEmailSent = payload;
      })
      .addCase(signupNewUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })
      .addCase(signinUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, { payload }) => {
        const { name, email, isVerified, accessToken, futureVisitDates, pastVisitDates } = payload;
        state.name = name;
        state.email = email;
        state.isVerified = isVerified;
        state.futureVisitDates = futureVisitDates;
        state.pastVisitDates = pastVisitDates;
        state.accessToken = accessToken;
      });
  },
});

export const authReducer = authSlice.reducer;
