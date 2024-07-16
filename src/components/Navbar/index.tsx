"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";
import { RxHamburgerMenu } from "react-icons/rx";
import { CustomDropDown } from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname == "/flexible-bookings/form" && "hidden"
      } sticky top-0 z-[2200] w-full bg-white border-b-2 transition-all duration-300 flex justify-between px-5 lg:px-10 py-2`}>
      <Link href={"/"} className="flex gap-5 items-center w-full">
        {/* <div
          className="relative w-full max-w-[76px] aspect-square
                 ">
          <Image src={"/images/logo.png"} alt="logo" fill />
         
        </div> */}
        <p className="font-bold lowercase text-brand-100 text-xl">
          trip<span className="text-primary capitalize">Connect</span>
        </p>
      </Link>

      <div className="flex items-center justify-center gap-14">
        <div className="hidden lg:flex">
          <CustomDropDown
            trigger={
              <div
                className="w-fit font-semibold px-8
             bg-primary text-white rounded-3xl capitalize whitespace-nowrap py-2">
                Book a ride
              </div>
            }
            dropDownItems={[
              <Link href={"/flexible-bookings"} key={"flecible"}>
                <p>Flexible Bookings</p>
              </Link>,
              <Link href={"/fixed-bookings"} key={"fixed"}>
                <p>Fixed bookings</p>
              </Link>,
            ]}
          />
        </div>
        <button onClick={() => setMobileMenuStore(true)}>
          <GiHamburgerMenu size={30} />
        </button>{" "}
      </div>
    </div>
  );
}
