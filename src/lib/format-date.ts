/**
 * Locale-stable date for SSR. Using UTC avoids server/client timezone mismatches
 * that show up as React hydration errors.
 */
export function formatDisplayDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    ...options,
    timeZone: "UTC",
  }).format(date);
}
