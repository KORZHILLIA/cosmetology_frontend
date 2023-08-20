import extractDateParameters from './extractDateParameters';

import { AvailableVisitDate } from '@/constants/interfaces';

const defineMatchingDates = (datesFromRedux: AvailableVisitDate[]) => {
  const matchingDates = datesFromRedux.map(date => {
    const { year, month, day } = extractDateParameters(date.visitDate);
    return new Date(year, month, day);
  });
  return matchingDates;
};

export default defineMatchingDates;
