import { notFound } from "next/navigation";
import data from "../../../../data/data.json";
import Link from "next/link";
import RouteButton from "@/components/route-button";
import { getClientTime } from "@/components/utils";

type Params = {
  gateId: string;
};

export default function GateDetailPage({ params }: { params: Params }) {
  const [mmHour, mmMinute] = getClientTime();

  const gate = data.Gates.find((gates) => gates?.gateId === params.gateId);

  if (!gate) return notFound();

  const cars = data.Cars.filter(
    (c) => c.gate1Id === gate.gateId || c.gate2Id === gate.gateId
  );

  return (
    <div className="p-5">
      <div className="flex items-center gap-5 pb-5">
        <Link
          href={"/gates"}
          className="text-white font-semibold hover:underline"
        >
          Back
        </Link>
        <div className="text-center text-white font-semibold">
          Gate Detail Page
        </div>
      </div>
      <div className="text-left text-white font-semibold space-y-3">
        <div>
          Name :
          {` ${gate.gateName} ${mmHour} (${
            gate.gateOpenTime <= mmHour && gate.gateCloseTime > mmHour
              ? " Open now "
              : " Close now "
          })`}
        </div>
        <div>Phone : {gate.gatePh}</div>
        <div>Open at {gate.gateOpenTime} AM</div>
        <div>Close at {gate.gateCloseTime - 12} PM</div>
        <RouteButton
          key={gate.gateId}
          id={gate.gateId}
          location={[gate.location.lat, gate.location.lng]}
          option="gates"
          text={"Check Location"}
          detail={false}
        />
        <div className="flex flex-col gap-2">
          {cars.map((car) => (
            <RouteButton
              key={car.carId}
              id={car.carId}
              location={[car.location.lat, car.location.lng]}
              option="cars"
              text={`${car.carName} ${mmHour} ${mmMinute} ${
                car.time2 <= mmHour ? "(from mdy)" : "(to mdy)"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
