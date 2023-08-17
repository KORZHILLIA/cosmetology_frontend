import { AvailableVisitDate } from '@/constants/interfaces';

const defineMatchingDates = (datesFromRedux: AvailableVisitDate[]) => {
  const matchingDates = datesFromRedux.map(date => {
    const year = new Date(date.visitDate).getFullYear();
    const month = new Date(date.visitDate).getMonth();
    const day = new Date(date.visitDate).getDate();
    return new Date(year, month, day);
  });
  return matchingDates;
};

export default defineMatchingDates;
