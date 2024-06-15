"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  {
    name: "home",
    url: "/",
  },

  {
    name: "signup",
    url: "/",
  },
  {
    name: "login",
    url: "/",
  },
];
export default function Navbar() {
  const { setMobileMenuStore } = useMobileNavStore();
  return (
    <div className="sticky top-0 z-[2200] w-full bg-white border-b-2 flex justify-between px-5 lg:px-10 py-3">
      <div className="flex gap-5 items-center w-full">
        {/* <div
          className="relative w-full max-w-[76px] aspect-square
                 ">
          <Image src={"/images/logo.png"} alt="logo" fill />
         
        </div> */}
        <p className="font-bold lowercase text-brand-100">tripconnect</p>
      </div>

      <div className="flex items-center justify-center gap-14">
        <Link href={"/"} className="hidden lg:flex">
          {" "}
          <button className="w-fit font-semibold px-8
           bg-primary text-white rounded-3xl capitalize whitespace-nowrap py-2">
            Book a ride
          </button>
        </Link>
        <button onClick={() => setMobileMenuStore(true)}>
          <GiHamburgerMenu size={30} />
        </button>{" "}
      </div>
    </div>
  );
}
