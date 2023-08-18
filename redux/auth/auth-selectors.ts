import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectAuth = (state: RootState) => state.auth;

export const getAuth = createSelector([selectAuth], auth => {
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
    availableVisitDates,
  } = auth;
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
    availableVisitDates,
  };
});
