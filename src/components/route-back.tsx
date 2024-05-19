"use client";

import { useRouter } from "next/navigation";

export default function RouteBack() {
  const route = useRouter();

  return (
    <button
      onClick={() => route.back()}
      className="text-white ml-5 font-semibold hover:underline"
    >
      Back
    </button>
  );
}
