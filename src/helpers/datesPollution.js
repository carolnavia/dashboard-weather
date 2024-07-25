import { add, getUnixTime, format } from "date-fns";

/**
 * Function to generate an array of past dates, distributed uniformly within a maximum range of days back,
 * based on points and days per point.
 * @param {number} points - Number of points (intervals) to generate within the range.
 * @param {number} daysPerPoint - Number of days between each point.
 * @param {number} maxDaysBack - Maximum limit of days back to consider.
 * @returns {Date[]} Array of past dates, including today's date at the end.
 */
function generatePastDates(points, daysPerPoint, maxDaysBack) {
  const dates = [];
  let currentOffset = daysPerPoint;
  while (currentOffset <= maxDaysBack) {
    dates.push(add(new Date(), { days: -currentOffset }));
    currentOffset += daysPerPoint;
  }
  dates.reverse().push(new Date());
  return dates;
}

// Define constants for calculation
const maxDaysBack = 90;
const daysPerPoint = 5;
const points = Math.floor(maxDaysBack / daysPerPoint);

const pastDates = generatePastDates(points, daysPerPoint, maxDaysBack);

/**
 * Function to format the dates into a specific format ("dd/MM/yyyy").
 * @param {Date[]} dates - Array of dates to format.
 * @returns {string[]} Array of formatted dates as text strings.
 */
function datesForFormat(dates) {
  return dates.map((date) => format(date, "dd/MM/yyyy"));
}

// Export the array of formatted dates for external use
export const datesChartPollution = datesForFormat(pastDates);

// Create an array of objects with time ranges based on the generated dates
export const datesPollutionArray = pastDates.map((date, index, array) => {
  if (index < array.length - 1) {
    return { start: getUnixTime(date), end: getUnixTime(array[index + 1]) };
  } else {
    return { start: getUnixTime(date), end: getUnixTime(new Date()) };
  }
});
