"use client";

import dynamic from "next/dynamic";

export default function MapInfo() {
  const MapPage = dynamic(() => import("@/components/map-container-page"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });
  return (
    <>
      <div className="hidden md:block">
        <MapPage height="100vh" />
      </div>
      <div className="block md:hidden">
        <MapPage height="36vh" />
      </div>
    </>
  );
}
