import type { RootState } from '../store';

export const getAuth = (state: RootState) => {
  const {
    role,
    name,
    email,
    futureVisitDates,
    pastVisitDates,
    accessToken,
    isSigned,
    error,
    loading,
  } = state.auth;
  return {
    role,
    name,
    email,
    futureVisitDates,
    pastVisitDates,
    accessToken,
    isSigned,
    error,
    loading,
  };
};
