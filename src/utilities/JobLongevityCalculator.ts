export default function getJobLongevity(
  startDate: Date,
  currentDate: Date
): string {
  let months: number;
  let years: number;
  years = currentDate.getFullYear() - startDate.getFullYear();
  months = years * 12;
  months -= startDate.getMonth();
  months += currentDate.getMonth();

  months = months <= 0 ? 0 : months;

  if (months >= 12) {
    return `${years} years, ${parseInt((months / years).toFixed()) - 1} months`;
  } else if (months !== 0) {
    return `${months} months`;
  }
  return "0";
}
