export const percentLastMonth = (exp) => {
  const now = new Date();
  const thisMonth = now.getMonth();
  const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
  const thisYear = now.getFullYear();
  const lastYear = thisMonth === 0 ? thisYear - 1 : thisYear;

  const thisMonthData = exp.filter((d) => {
    const date = new Date(d.date);
    return date.getMonth() === thisMonth && date.getFullYear() === thisYear;
  });

  const lastMonthData = exp.filter((d) => {
    const date = new Date(d.date);
    return date.getMonth() === lastMonth && date.getFullYear() === lastYear;
  });

  const sum = (arr) => arr.reduce((acc, el) => acc + +el.amount, 0);
  const thisSum = sum(thisMonthData);
  const lastSum = sum(lastMonthData);
  const diff = thisSum - lastSum;
  const percent = lastSum ? ((diff / lastSum) * 100).toFixed(1) : 0;
  console.log(percent, thisSum, lastSum);
  return { percent, thisSum, lastSum };
};