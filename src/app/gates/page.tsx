export const revalidate = 0;

import data from "../../../data/data.json";
import RouteButton from "@/components/route-button";
import { getClientTime } from "@/utils";
import RouteBack from "@/components/route-back";
import ShowTime from "@/components/show-time";

export default function GatesPage() {
  const [mmHour] = getClientTime();

  return (
    <div className="py-5">
      <div className="flex items-center">
        <RouteBack />
        <div className="text-white ml-5 font-bold">Gates Page</div>
        <ShowTime />
      </div>
      <div className="flex flex-col gap-5 font-bold text-white items-center  my-4">
        {data.Gates.map((gate) => (
          <RouteButton
            option="gates"
            id={gate.gateId}
            key={gate.gateId}
            location={[gate.location.lat, gate.location.lng]}
            text={`${gate.gateName} (${
              gate.gateOpenTime <= mmHour && gate.gateCloseTime > mmHour
                ? "open"
                : "close"
            })`}
          />
        ))}
      </div>
    </div>
  );
}
