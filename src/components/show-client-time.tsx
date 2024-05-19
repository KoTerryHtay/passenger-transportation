"use client";

export default function ShowClientTime() {
  const mmHour = new Date().getHours();
  const mmMinute = new Date().getMinutes();

  return (
    <div className="text-white ml-5 font-semibold">
      Time : {mmHour > 12 ? mmHour - 12 : mmHour}:{mmMinute}
      {mmHour > 12 ? " PM" : " AM"}
    </div>
  );
}
