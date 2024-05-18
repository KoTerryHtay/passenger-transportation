export function getClientTime() {
  const mmTime = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    hour12: false,
    timeZone: "Asia/Yangon",
  }).format(new Date());

  const [mmHour, mmMinute] = mmTime.split(":");

  // console.log("getClientDate >>>", mmTime);

  return [+mmHour, +mmMinute];
}
