import LinkButton from "@/components/link-button";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 font-bold text-white items-center  my-4">
      <LinkButton link="/gates" text="Gates" />
      <LinkButton link="/cars" text="Cars" />
    </div>
  );
}
