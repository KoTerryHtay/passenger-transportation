import { Navbar, NavbarBrand } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Navbar className="bg-[#1B4242] shadow shadow-black">
        <NavbarBrand className="font-bold text-xl text-white">
          <Link href={"/"}>Transportation</Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
