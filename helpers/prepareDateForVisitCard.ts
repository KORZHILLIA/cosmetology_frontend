const prepareDateForVisitCard = (visitDate: Date) => {
  const [date, visitTime] = new Date(visitDate).toLocaleString().split(',');
  const time = visitTime.slice(0, -3);
  return { date, time };
};

export default prepareDateForVisitCard;
