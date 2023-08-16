import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import extractAxiosError from '@/helpers/extractAxiosError';
import { addNewDates, getAllDates } from '@/service/externalApi';

import type { NewDatesByAdminBody } from '@/constants/interfaces';

export const addNewDatesByAdmin = createAsyncThunk(
  'dates/add',
  async (newVisitDates: NewDatesByAdminBody, { rejectWithValue }) => {
    try {
      const visitDates = await addNewDates(newVisitDates);
      return visitDates;
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);

export const getAllAvailableVisitDates = createAsyncThunk(
  'dates/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const allVisitDates = await getAllDates();
      return allVisitDates;
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);
