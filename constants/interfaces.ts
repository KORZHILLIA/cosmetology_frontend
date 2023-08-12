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

export interface AxiosErrorResponseData {
  error: string;
  message: string;
  statusCode: number;
}
