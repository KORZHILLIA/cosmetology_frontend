import { createSlice, Action, AnyAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HYDRATE } from 'next-redux-wrapper';

import {
  signupNewUser,
  signupOuterUser,
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
  confirmVisitDateByAdmin,
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

interface RejectedAction extends Action {
  payload: any;
}

interface PendingAction extends Action {
  state: ReduxUserState;
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected');
}

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('pending');
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return { ...state, ...action.payload.auth };
      })
      .addCase(signupNewUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isEmailSent = payload;
      })
      .addCase(signupNewUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
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
      .addCase(signupOuterUser.fulfilled, (state, { payload }) => {
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
      .addCase(signupOuterUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
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
      .addCase(signoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(refuseDateByUser.fulfilled, (state, { payload }) => {
        const { futureVisitDates, pastVisitDates } = payload;
        state.futureVisitDates = futureVisitDates;
        state.pastVisitDates = pastVisitDates;
        state.loading = false;
        state.error = null;
      })
      .addCase(addNewDatesByAdmin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.availableVisitDates = [...state.availableVisitDates, ...payload];
      })
      .addCase(getAllAvailableVisitDates.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.availableVisitDates = payload;
      })
      .addCase(deleteVisitDateByAdmin.fulfilled, (state, { payload }) => {
        state.loading = false;
        const requiredIdx = state.availableVisitDates.findIndex(visit => visit._id === payload);
        state.availableVisitDates.splice(requiredIdx, 1);
        return state;
      })
      .addCase(reserveVisitDateByUser.fulfilled, (state, { payload }) => {
        const { userId, reservedVisitDateID, futureVisitDates, pastVisitDates } = payload;
        const requiredIdx = state.availableVisitDates.findIndex(
          visit => visit._id === reservedVisitDateID
        );
        state.availableVisitDates[requiredIdx].client = userId;
        state.futureVisitDates = futureVisitDates;
        state.pastVisitDates = pastVisitDates;
        state.loading = false;
        state.error = null;
      })
      .addCase(confirmVisitDateByAdmin.fulfilled, (state, { payload }) => {
        const { status, dateId } = payload;
        const requiredIdx = state.availableVisitDates.findIndex(visit => visit._id === dateId);
        const isConfirmed = status === 201;
        state.availableVisitDates[requiredIdx].isConfirmed = isConfirmed;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        const { status } = payload as ExtractedAxiosError;
        if (status === 401) {
          return { ...initialState, error: payload as ExtractedAxiosError };
        }
        state.loading = false;
        state.error = payload as ExtractedAxiosError;
      })
      .addMatcher(isPendingAction, state => {
        state.loading = true;
        state.error = null;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'availableVisitDates'],
};

export const authPersistReducer = persistReducer(authPersistConfig, authSlice.reducer);
