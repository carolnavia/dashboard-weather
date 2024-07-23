import { add, getUnixTime, format } from "date-fns";

const currentDate = new Date();
const thirtyDaysAgo = add(new Date(), {
  days: -30,
});

const sixtyDaysAgo = add(new Date(), {
  days: -60,
});
const ninetyDaysAgo = add(new Date(), {
  days: -90,
});

const formattedDate = getUnixTime(currentDate);
const formattedThirtyDaysAgo = getUnixTime(thirtyDaysAgo);
const formattedSixtyDaysAgo = getUnixTime(sixtyDaysAgo);
const formattedNinetyDaysAgo = getUnixTime(ninetyDaysAgo);

const datesChartPollutionArray = [
  ninetyDaysAgo,
  sixtyDaysAgo,
  thirtyDaysAgo,
  currentDate,
];

function datesForFormat(dates) {
  const formattedDates = dates.map((date) => {
    const dateObj = new Date(date);

    return format(dateObj, "dd/MM/yyyy");
  });

  return formattedDates;
}

export const datesChartPollution = datesForFormat(datesChartPollutionArray);

export const datesPollutionArray = [
  { start: formattedNinetyDaysAgo, end: formattedSixtyDaysAgo },
  { start: formattedSixtyDaysAgo, end: formattedThirtyDaysAgo },
  { start: formattedThirtyDaysAgo, end: formattedDate },
  { start: formattedDate, end: formattedDate },
];
