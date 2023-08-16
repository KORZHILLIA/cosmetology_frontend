import type { RootState } from '../store';

export const getAvailableDates = (state: RootState) => state.dates.availableVisitDates;
