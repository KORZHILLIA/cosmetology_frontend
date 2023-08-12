import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HYDRATE } from 'next-redux-wrapper';

import { signupNewUser, signinUser, getCurrentUser } from './auth-operations';

import { ReduxUserState, ExtractedAxiosError } from '@/constants/interfaces';

const initialState: ReduxUserState = {
  role: null,
  name: '',
  email: '',
  isEmailSent: false,
  isVerified: false,
  isSigned: false,
  futureVisitDates: [],
  pastVisitDates: [],
  accessToken: '',
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
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(signinUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, { payload }) => {
        const {
          role,
          name,
          email,
          isVerified,
          isSigned,
          accessToken,
          futureVisitDates,
          pastVisitDates,
        } = payload;
        state.role = role;
        state.name = name;
        state.email = email;
        state.isVerified = isVerified;
        state.isSigned = isSigned;
        state.futureVisitDates = futureVisitDates;
        state.pastVisitDates = pastVisitDates;
        state.accessToken = accessToken;
      })
      .addCase(signinUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(getCurrentUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        const {
          role,
          name,
          email,
          isVerified,
          isSigned,
          accessToken,
          futureVisitDates,
          pastVisitDates,
        } = payload;
        state.role = role;
        state.loading = false;
        state.name = name;
        state.email = email;
        state.isVerified = isVerified;
        state.isSigned = isSigned;
        state.futureVisitDates = futureVisitDates;
        state.pastVisitDates = pastVisitDates;
        state.accessToken = accessToken;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const authPersistReducer = persistReducer(authPersistConfig, authSlice.reducer);

// export const authReducer = authSlice.reducer;
