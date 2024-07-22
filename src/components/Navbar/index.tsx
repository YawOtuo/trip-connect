"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";
import { RxHamburgerMenu } from "react-icons/rx";
import { CustomDropDown } from "../ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store/useAppStore";
import { UserIcon } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";

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
  const { DBDetails, FBaseDetails, setDBDetails, setFBaseDetails } = useAppStore();
  const router = useRouter()

  return (
    <div
      className={`${
        pathname == "/flexible-bookings/form" && "hidden"
      } sticky top-0 z-[2200] w-full bg-white border-b-2 transition-all duration-300 flex justify-between px-5 lg:px-10 py-2 items-center gap-5`}>
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
      <div className="flex gap-3 items-center">
        {Object.keys(FBaseDetails).length > 0 ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Avatar>
                {FBaseDetails?.photoURL ? (
                  <AvatarImage src={FBaseDetails?.photoURL} />
                ) : (
                  <AvatarImage
                    src={
                      `https://api.dicebear.com/8.x/adventurer/svg?seed=$` +
                      DBDetails?.email +
                      `&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,ffd5dc,ffdfbf,d1d4f9`
                    }
                  />
                )}
                <AvatarFallback>
                  {<UserIcon size={24} color="black" />}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                My Account <br />
                <span className="font-normal">
                  {DBDetails ? DBDetails?.email : ""}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                Dashboard
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={() => {
                  signOut(auth);
                  router.push("/login");
                  setDBDetails({});
                  setFBaseDetails({});
                }}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login" className="text-black">
            Login
          </Link>
        )}

      </div>{" "}
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
