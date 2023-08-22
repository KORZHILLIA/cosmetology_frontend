import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ExtractedAxiosError {
  status: number;
  message: string;
}

export type Role = null | 'user' | 'admin';

export type VisitCardType = 'admin' | 'clientGeneral' | 'clientPersonal';

type Client = {
  _id: string;
  name: string;
};

export type ClientInfo = {
  id: string;
  name: string;
  email: string;
  pastVisitDates: PastVisitDate[];
};

export type FutureVisitDate = {
  _id: string;
  visitDate: Date;
  client: string;
  isConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  expireAt: Date;
};

export type PastVisitDate = {
  date: Date;
  postConfirmed: boolean;
};

export interface AvailableVisitDate {
  _id: string;
  client: null | Client;
  isConfirmed: boolean;
  visitDate: Date;
  createdAt: Date;
  updatedAt: Date;
  expireAt: Date;
}

export interface ReduxUserState {
  role: Role;
  name: string;
  email: string;
  isEmailSent: boolean;
  isVerified: boolean;
  isSigned: boolean;
  accessToken: string;
  futureVisitDates: FutureVisitDate[];
  pastVisitDates: PastVisitDate[];
  loading: boolean;
  error: null | ExtractedAxiosError;
  availableVisitDates: AvailableVisitDate[];
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

export interface ReserveDateByUserBody {
  role: Role;
  dateID: string;
}

export interface RefuseDateByUserBody {
  role: Role;
  dateID: string;
}

export interface ConfirmDateByAdminBody {
  role: Role;
  dateID: string;
}
