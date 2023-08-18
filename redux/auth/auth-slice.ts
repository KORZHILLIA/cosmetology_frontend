import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HYDRATE } from 'next-redux-wrapper';

import {
  signupNewUser,
  signinUser,
  getCurrentUser,
  signoutUser,
  refuseDateByUser,
} from './auth-operations';

import {
  addNewDatesByAdmin,
  getAllAvailableVisitDates,
  deleteVisitDateByAdmin,
  reserveVisitDateByUser,
} from '@/redux/dates/dates-operations';

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
  availableVisitDates: [],
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
        state.loading = false;
        state.error = null;
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
        state.loading = false;
        state.error = null;
        state.role = role;
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
      })
      .addCase(signoutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(signoutUser.rejected, (state, { payload }) => {
        const { status, message } = payload as ExtractedAxiosError;
        if (status === 401) {
          return { ...initialState, error: { status, message } };
        }
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(refuseDateByUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refuseDateByUser.fulfilled, (state, { payload }) => {
        state.futureVisitDates = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(refuseDateByUser.rejected, (state, { payload }) => {
        const { status, message } = payload as ExtractedAxiosError;
        if (status === 401) {
          return { ...initialState, error: { status, message } };
        }
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(addNewDatesByAdmin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewDatesByAdmin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.availableVisitDates = [...state.availableVisitDates, ...payload];
      })
      .addCase(addNewDatesByAdmin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(getAllAvailableVisitDates.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAvailableVisitDates.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.availableVisitDates = payload;
      })
      .addCase(getAllAvailableVisitDates.rejected, (state, { payload }) => {
        const { status, message } = payload as ExtractedAxiosError;
        if (status === 401) {
          return { ...initialState, error: { status, message } };
        }
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(deleteVisitDateByAdmin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVisitDateByAdmin.fulfilled, (state, { payload }) => {
        state.loading = false;
        const requiredIdx = state.availableVisitDates.findIndex(visit => visit._id === payload);
        state.availableVisitDates.splice(requiredIdx, 1);
        return state;
      })
      .addCase(deleteVisitDateByAdmin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addCase(reserveVisitDateByUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reserveVisitDateByUser.fulfilled, (state, { payload }) => {
        const { userId, reservedVisitDateID, futureVisitDates } = payload;
        const requiredIdx = state.availableVisitDates.findIndex(
          visit => visit._id === reservedVisitDateID
        );
        state.availableVisitDates[requiredIdx].client = userId;
        state.futureVisitDates = futureVisitDates;
        state.loading = false;
        state.error = null;
      })
      .addCase(reserveVisitDateByUser.rejected, (state, { payload }) => {
        const { status, message } = payload as ExtractedAxiosError;
        if (status === 401) {
          return { ...initialState, error: { status, message } };
        }
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'availableVisitDates'],
};

export const authPersistReducer = persistReducer(authPersistConfig, authSlice.reducer);
