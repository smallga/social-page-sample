export const nowDateDiffSec = (targetDate: Date) => {
  let nowDate = new Date();
  let diff = nowDate.getTime() - targetDate.getTime();
  return diff / 1000;
}