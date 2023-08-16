const prepareVisitTimesToAdd = (hour: number) => {
  const finalVisitDatesArr = [];

  for (let i = 10; i <= 19; i += 1) {
    const id = i;
    const time = (hour as number) + i;
    const el = { id, time: time.toString() + ':00' };
    finalVisitDatesArr.push(el);
  }
  return finalVisitDatesArr;
};

export default prepareVisitTimesToAdd;
