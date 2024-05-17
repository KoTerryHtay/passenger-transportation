"use client";

import dynamic from "next/dynamic";

export default function MapInfo() {
  const MapPage = dynamic(() => import("@/components/map-container-page"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });
  return <MapPage />;
}
