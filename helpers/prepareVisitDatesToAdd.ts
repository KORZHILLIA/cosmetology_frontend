const prepareVisitDatesToAdd = (date: Date, timesArr: string[]) => {
  const initialYear = date?.getFullYear();
  const initialMonth = date?.getMonth() + 1;
  const initialDay = date?.getDate();

  const prepareVisitDates = timesArr.map(time =>
    new Date(
      new Date(`${initialYear}-${initialMonth}-${initialDay} ${time}:00`).toUTCString()
    ).getTime()
  );
  return prepareVisitDates;
};

export default prepareVisitDatesToAdd;
