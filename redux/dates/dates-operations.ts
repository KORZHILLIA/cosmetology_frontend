import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import extractAxiosError from '@/helpers/extractAxiosError';
import { addNewDates, getAllDates, deleteDate } from '@/service/externalApi';

import type { NewDatesByAdminBody, DeleteDateByAdminBody } from '@/constants/interfaces';

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

export const deleteVisitDateByAdmin = createAsyncThunk(
  'dates/delete',
  async (dateInfo: DeleteDateByAdminBody, { rejectWithValue }) => {
    try {
      const data = await deleteDate(dateInfo);
      alert(data.message);
      return data.id;
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);
