// "use client";

export function name(
  gateName: string,
  gateOpenTime: number,
  gateCloseTime: number
) {
  const time = new Date().getHours();

  return `${gateName} (${
    gateOpenTime <= time && gateCloseTime > time ? "open" : "close"
  })`;
}

export function getClientDate() {
  const time = new Date().getHours();
  console.log("getClientDate >>>", time);

  return time;
}
