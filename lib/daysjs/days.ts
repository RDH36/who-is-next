import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatDateWithRelativeTime(date: string | Date): string {
  const inputDate = dayjs(date);
  const now = dayjs();

  if (inputDate.isSame(now, "day")) {
    return "Today";
  }

  return inputDate.from(now);
}
