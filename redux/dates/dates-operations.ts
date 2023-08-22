import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import extractAxiosError from '@/helpers/extractAxiosError';
import {
  addNewDates,
  getAllDates,
  deleteDate,
  reserveDate,
  confirmDate,
} from '@/service/externalApi';

import type {
  NewDatesByAdminBody,
  DeleteDateByAdminBody,
  ReserveDateByUserBody,
  ConfirmDateByAdminBody,
} from '@/constants/interfaces';

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

export const reserveVisitDateByUser = createAsyncThunk(
  'dates/reserve',
  async (dateInfo: ReserveDateByUserBody, { rejectWithValue }) => {
    try {
      const { userId, reservedVisitDateID, futureVisitDates, pastVisitDates } = await reserveDate(dateInfo);
      alert('Successfully reserved. Wait for confirmation');
      return { userId, reservedVisitDateID, futureVisitDates, pastVisitDates };
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);

export const confirmVisitDateByAdmin = createAsyncThunk(
  'dates/confirm',
  async (dateInfo: ConfirmDateByAdminBody, { rejectWithValue }) => {
    try {
      const { data, status } = await confirmDate(dateInfo);
      const { dateId, message } = data;
      alert(message);
      return { status, dateId };
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, message } = extractAxiosError(axiosError);
      return rejectWithValue({ status, message });
    }
  }
);
