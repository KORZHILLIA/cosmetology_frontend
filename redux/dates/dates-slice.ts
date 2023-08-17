import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HYDRATE } from 'next-redux-wrapper';

import {
  addNewDatesByAdmin,
  getAllAvailableVisitDates,
  deleteVisitDateByAdmin,
} from './dates-operations';

import { ReduxDatesState, ExtractedAxiosError } from '@/constants/interfaces';

const initialState: ReduxDatesState = {
  availableVisitDates: [],
  loading: false,
  error: null,
};

const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return { ...state, ...action.payload.dates };
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
      });
  },
});

const datesPersistConfig = {
  key: 'dates',
  storage,
};

export const datesPersistReducer = persistReducer(datesPersistConfig, datesSlice.reducer);
