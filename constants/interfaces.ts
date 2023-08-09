export interface ReduxUserState {
  name: string;
  email: string;
  isEmailSent: boolean;
  isVerified: boolean;
  accessToken: string;
  futureVisitDates: number[];
  pastVisitDates: number[];
  loading: boolean;
  error: null | string;
}

export interface AxiosErrorResponseData {
  error: string;
  message: string;
  statusCode: number;
}
