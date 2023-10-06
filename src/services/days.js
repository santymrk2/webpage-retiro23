const CURRENT_DATE_BETWEEN = `https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires`

export const getDaysForEvent = () => {
  return fetch(CURRENT_DATE_BETWEEN)
    .then(response => response.json())
    .then( data => {
    const { datetime } = data
    const date = datetime.slice(0, 10)

    function getNumberOfDays(start, end) {
      const date1 = new Date(start);
      const date2 = new Date(end);
      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;
      // Calculating the time difference between two dates
      const diffInTime = date2.getTime() - date1.getTime();
      // Calculating the no. of days between two dates
      const diffInDays = Math.round(diffInTime / oneDay);
      return diffInDays;
    }

    return getNumberOfDays(date, "2023/10/13");
  })
}