import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import data from "../../data/data.json";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useSearchParams } from "next/navigation";
import { carSvgIcon, StopSvgIcon } from "../utils/svg";

export default function MapContainerPage({ height }: { height: string }) {
  const time = new Date().getHours();
  const searchParams = useSearchParams();

  const searchLat = Number(searchParams.get("lat"));
  const searchLng = Number(searchParams.get("lng"));

  const hasSearchLatLng = searchLat && searchLng;

  // console.log(">>> ", searchLat, searchLng);
  // console.log(">>> ", !!hasSearchLatLng);
  // console.log("time >>>", time);

  return (
    <div className="relative z-0">
      <MapContainer
        style={{
          height: `${height}`,
          // height: "100vh",
        }}
        center={
          !!hasSearchLatLng
            ? [searchLat, searchLng]
            : ([21.368859, 96.169893] as LatLngExpression)
        }
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.Cars.map((car) => (
          <Marker
            icon={carSvgIcon}
            position={[car.location.lat, car.location.lng]}
            key={car.carId}
          >
            <ChangeView location={[searchLat, searchLng]} />
            <Popup>
              <div>
                Name :
                {` ${car.carName} ${
                  car.time2 <= time ? "(from mdy)" : "(to mdy)"
                }`}
              </div>
              <div>Driver Name : {car.driverName}</div>
              <div>Driver Phone : {car.driverPh}</div>
              <div>To Mdy at {car.time1} AM</div>
              <div>From Mdy at {car.time2 - 12} PM</div>
            </Popup>
          </Marker>
        ))}

        {data.Gates.map((gate) => (
          <Marker
            icon={StopSvgIcon}
            position={[gate.location.lat, gate.location.lng]}
            key={gate.gateId}
          >
            <ChangeView
              location={
                !!hasSearchLatLng
                  ? [searchLat, searchLng]
                  : [21.368859, 96.169893]
              }
            />
            <Popup>
              <div>
                Name :
                {` ${gate.gateName} (${
                  gate.gateOpenTime <= time && gate.gateCloseTime > time
                    ? " Open now "
                    : " Close now "
                })`}
              </div>
              <div>Phone : {gate.gatePh}</div>
              <div>Open at {gate.gateOpenTime} AM</div>
              <div>Close at {gate.gateCloseTime - 12} PM</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function ChangeView({ location }: { location: number[] }) {
  const map = useMap();
  map.setView(location as LatLngExpression);

  return null;
}
