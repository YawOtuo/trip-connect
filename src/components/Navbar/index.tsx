import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";

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
  return (
    <div className="w-full bg-white border-b-2 flex justify-between px-10 py-4">
      <div className="flex gap-5 items-center w-full">
        {/* <div
          className="relative w-full max-w-[76px] aspect-square
                 ">
          <Image src={"/images/logo.png"} alt="logo" fill />
         
        </div> */}
        <p className="font-bold lowercase text-brand-100">tripconnect</p>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-5">

        {links?.map((r, index) => (
          <Link
            key={index}
            href={r?.url}
            className="capitalize hover:text-yellow1 whitespace-nowrap">
            {r?.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
