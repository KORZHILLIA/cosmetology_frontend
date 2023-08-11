import type { RootState } from '../store';

export const getAuth = (state: RootState) => {
  const { accessToken, error, loading } = state.auth;
  return { accessToken, error, loading };
};
