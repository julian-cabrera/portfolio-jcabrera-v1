export default function getDateDiff(startDate: Date, currentDate: Date): string {
  let months: number;
  let years: number;

  let diff = new Date(currentDate.getTime() - startDate.getTime());
  
  years = diff.getFullYear() - 1970;
  months = diff.getMonth();

  if (years < 1){
    return `${months} months`;
  }
  return `${years} years, ${months} months`;
}