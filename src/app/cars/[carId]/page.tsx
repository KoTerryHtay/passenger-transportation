import { notFound } from "next/navigation";
import data from "../../../../data/data.json";
import Link from "next/link";
import RouteButton from "@/components/route-button";
import { getClientTime } from "@/utils";
import RouteBack from "@/components/route-back";
import ShowTime from "@/components/show-time";

type Params = {
  carId: string;
};

export default function CarDetailPage({ params }: { params: Params }) {
  const [mmHour] = getClientTime();

  const car = data.Cars.find((cars) => cars?.carId === params.carId);

  if (!car) return notFound();

  const gates = data.Gates.filter(
    (g) => g.gateId === car.gate1Id || g.gateId === car.gate2Id
  );

  return (
    <div className="p-5">
      <div className="flex items-center gap-5 pb-5">
        <RouteBack />
        <div className="text-center text-white font-semibold">
          Car Detail Page
        </div>
        <ShowTime />
      </div>
      <div className="text-left text-white font-semibold space-y-3">
        <div>
          Name :
          {` ${car.carName} ${car.time2 <= mmHour ? "(from mdy)" : "(to mdy)"}`}
        </div>
        <div>Driver Name : {car.driverName}</div>
        <div>Driver Phone : {car.driverPh}</div>
        <div>To Mdy at {car.time1} AM</div>
        <div>From Mdy at {car.time2 - 12} PM</div>
        <RouteButton
          key={car.carId}
          id={car.carId}
          location={[car.location.lat, car.location.lng]}
          option="cars"
          text={"Check Location"}
          detail={false}
        />

        <div className="flex flex-col gap-2">
          {gates.map((gate) => (
            <RouteButton
              key={gate.gateId}
              id={gate.gateId}
              location={[gate.location.lat, gate.location.lng]}
              option="gates"
              text={`${gate.gateName} (${
                gate.gateOpenTime <= mmHour && gate.gateCloseTime > mmHour
                  ? "open"
                  : "close"
              })`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
