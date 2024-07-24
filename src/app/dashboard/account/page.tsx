"use client";
import { useAppStore } from "@/lib/store/useAppStore";
import React from "react";
import { BsFillHouseFill, BsStarFill, BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import PersonalInformation from "./components/PersonalInformation";
import TripsInformation from "./components/TripsInformation";
import UserImage from "./components/UserImage";
import AccountInformation from "./components/AccountInformation";
function Page() {
  const { DBDetails } = useAppStore();
  return (
    <div className="flex flex-col gap-5">
     <div className="lg:pb-10"> <UserImage /></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        <PersonalInformation />
        <TripsInformation />
        <AccountInformation />
      </div>

      {/* <div className="flex text-primary font-bold py-8">Reset Password</div> */}
    </div>
  );
}

export default Page;
