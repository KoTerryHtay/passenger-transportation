import { getClientTime } from "@/utils";

export default function ShowTime() {
  const [mmHour, mmMinute] = getClientTime();

  return (
    <div className="text-white ml-5 font-semibold">
      Time : {mmHour > 12 ? mmHour - 12 : mmHour}:{mmMinute}
      {mmHour > 12 ? " PM" : " AM"}
    </div>
  );
}
