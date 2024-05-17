import Link from "next/link";
import data from "../../../data/data.json";
import RouteButton from "@/components/route-button";
import { getClientDate } from "@/components/utils";

export default function GatesPage() {
  // const time = new Date().getHours();
  const time = getClientDate();
  // console.log("time >>>", time);

  return (
    <div className="py-5">
      <div className="flex items-center">
        <Link
          href={"/"}
          className="text-white ml-5 font-semibold hover:underline"
        >
          Back
        </Link>
        <div className="text-white ml-5 font-bold">Gates Page</div>
      </div>
      <div className="flex flex-col gap-5 font-bold text-white items-center  my-4">
        {data.Gates.map((gate) => (
          <RouteButton
            option="gates"
            id={gate.gateId}
            key={gate.gateId}
            location={[gate.location.lat, gate.location.lng]}
            text={`${gate.gateName} (${
              gate.gateOpenTime <= time && gate.gateCloseTime > time
                ? "open"
                : "close"
            })`}
          />
        ))}
      </div>
    </div>
  );
}
