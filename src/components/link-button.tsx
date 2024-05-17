import Link from "next/link";

export default function LinkButton({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      className="bg-[#A3D3C2] text-[#092635]  py-2 px-7 rounded-lg hover:bg-[#092635] hover:text-[#A3D3C2]"
      href={link}
    >
      {text}
    </Link>
  );
}
