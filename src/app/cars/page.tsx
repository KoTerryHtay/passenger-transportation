export const dynamic = "force-dynamic";

import data from "../../../data/data.json";
import RouteButton from "@/components/route-button";
import { getClientTime } from "@/utils";
import RouteBack from "@/components/route-back";
import ShowTime from "@/components/show-time";

export default function CarsPage() {
  const [mmHour] = getClientTime();

  return (
    <div className="py-5">
      <div className="flex items-center">
        <RouteBack />
        <div className="text-white ml-5 font-bold">Cars Page</div>
        <ShowTime />
      </div>
      <div className="flex flex-col gap-5 font-bold text-white items-center  my-4">
        {data.Cars.map((car) => (
          <RouteButton
            option="cars"
            id={car.carId}
            key={car.carId}
            location={[car.location.lat, car.location.lng]}
            text={`${car.carName} ${
              car.time2 <= mmHour ? "(from mdy)" : "(to mdy)"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
