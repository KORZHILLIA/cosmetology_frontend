import type { RootState } from '../store';

export const getDates = (state: RootState) => {
  const { availableVisitDates, loading, error } = state.dates;
  return { availableVisitDates, loading, error };
};
