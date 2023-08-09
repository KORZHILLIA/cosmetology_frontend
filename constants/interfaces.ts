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
