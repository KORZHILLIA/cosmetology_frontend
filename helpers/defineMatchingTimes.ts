import { AvailableVisitDate } from '@/constants/interfaces';

const defineMatchingTimes = (datesFromRedux: AvailableVisitDate[], currentDate: Date) => {
  const requiredDateFromRedux = datesFromRedux
    .map(reduxDate => reduxDate.visitDate)
    .filter(visitDate => new Date(visitDate).getDate() === currentDate?.getDate());
  const coinsidencedTimes = requiredDateFromRedux.map(
    date => new Date(date).getHours().toString() + ':00'
  );

  return coinsidencedTimes;
};

export default defineMatchingTimes;
