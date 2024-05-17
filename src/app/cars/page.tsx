export const dynamic = "force-dynamic";

import Link from "next/link";
import data from "../../../data/data.json";
import RouteButton from "@/components/route-button";

export default function CarsPage() {
  const time = new Date().getHours();

  return (
    <div className="py-5">
      <div className="flex items-center">
        <Link href={"/"} className="text-white ml-5  hover:underline">
          Back
        </Link>
        <div className="text-white ml-5 font-bold">Cars Page</div>
      </div>
      <div className="flex flex-col gap-5 font-bold text-white items-center  my-4">
        {data.Cars.map((car) => (
          <RouteButton
            option="cars"
            id={car.carId}
            key={car.carId}
            location={[car.location.lat, car.location.lng]}
            text={`${car.carName} ${
              car.time2 <= time ? "(from mdy)" : "(to mdy)"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
