const getMonthsForAdmin = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const nextMonth = now.getMonth() + 1;
  const fromMonth = new Date(currentYear, currentMonth);
  const toMonth = new Date(currentYear, nextMonth);
  return { fromMonth, toMonth };
};

export default getMonthsForAdmin;
