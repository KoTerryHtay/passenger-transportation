import Link from "next/link";

export default function RouteButton({
  id,
  text,
  location,
  option,
  detail = true,
}: {
  option: "cars" | "gates";
  id: string;
  text: string;
  location: number[];
  detail?: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      <Link
        href={`?lat=${location[0]}&lng=${location[1]}`}
        className="bg-[#A3D3C2] text-[#092635]  py-2 px-7 rounded-lg hover:bg-[#092635] hover:text-[#A3D3C2]"
      >
        {text}
      </Link>
      {detail && (
        <Link
          href={`/${option}/${id}?lat=${location[0]}&lng=${location[1]}`}
          className="bg-[#A3D3C2] text-[#092635]  py-2 px-2 rounded-lg hover:bg-[#092635] hover:text-[#A3D3C2] w-fit"
        >
          detail
        </Link>
      )}
    </div>
  );
}
