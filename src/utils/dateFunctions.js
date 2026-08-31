export const isSameWeek = (date1, date2 = new Date()) => {
  return getStartOfWeek(date1) === getStartOfWeek(date2);
};

const getStartOfWeek = (d) => {
  const date = new Date(d);
  const day = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff)).setHours(0, 0, 0, 0);
};

export const isSameMonth = (date1, date2 = new Date()) => {
  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
