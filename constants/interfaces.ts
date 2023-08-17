import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ExtractedAxiosError {
  status: number;
  message: string;
}

export type Role = null | 'user' | 'admin';

export interface ReduxUserState {
  role: Role;
  name: string;
  email: string;
  isEmailSent: boolean;
  isVerified: boolean;
  isSigned: boolean;
  accessToken: string;
  futureVisitDates: number[];
  pastVisitDates: number[];
  loading: boolean;
  error: null | ExtractedAxiosError;
}

export interface AvailableVisitDate {
  _id: string;
  client: null | string;
  isConfirmed: boolean;
  visitDate: Date;
  createdAt: Date;
  updatedAt: Date;
  expireAt: Date;
}

export interface ReduxDatesState {
  availableVisitDates: AvailableVisitDate[];
  loading: boolean;
  error: null | ExtractedAxiosError;
}

export interface AxiosErrorResponseData {
  error: string;
  message: string;
  statusCode: number;
}

export interface SignoutBody {
  email: string;
}

export interface NewDatesByAdminBody {
  role: Role;
  dates: number[];
}

export interface DeleteDateByAdminBody {
  role: Role;
  dateID: string;
}

export interface ReserveDateByUser {
  role: Role;
  dateID: string;
}
