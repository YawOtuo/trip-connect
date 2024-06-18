import Link from "next/link";
import React from "react";
import { LuLocateFixed } from "react-icons/lu";
import { GiFlexibleStar } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeUp } from "@/lib/animations";

type RideTypeProps = {
  label: string;
  text: string;
  link: string;
  icon: React.ReactNode;
};

const RideType = ({ label, text, link, icon }: RideTypeProps) => {
  return (
    <FramerWrapper {...fadeUp} className="flex flex-col gap-5 ">
      {icon}

      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-5">
          <p className="text-xl font-semibold">{label}</p>
          <p>{text}</p>
        </div>

        <Link
         
          href={link}>
          <button className=" items-center relative group border-2 border-white hover:border-primary-100 py-2 px-6 rounded-3xl overflow-hidden">
            <span className="flex items-center gap-3 relative z-10 group-hover:text-white  transition-all duration-500">
              Start here
              <FaArrowRight />
            </span>
            <div className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
          </button>
        </Link>
      </div>
    </FramerWrapper>
  );
};

function ScheduleARideToday() {
  return (
    <div className="w-full flex flex-col gap-20 bg-primary-100 text-white px-5 lg:px-20 py-24 my-20">
      <h1 className="text-3xl lg:text-5xl font-semibold">
        Schedule a ride today
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <RideType
          label="Flexible Booking"
          text="Lorem ipsum dolor sit amet consectetur. Pharetra elementum at quis orci id morbi facilisis facilisi. Sed et dictum id nisl purus odio. Tellus diam nulla risus elementum sapien imperdiet. Et mattis tincidunt tempor at in ridiculus."
          link="/"
          icon={<LuLocateFixed size={60} />}
        />
        <RideType
          label="Fixed Booking"
          text="Lorem ipsum dolor sit amet consectetur. Pharetra elementum at quis orci id morbi facilisis facilisi. Sed et dictum id nisl purus odio. Tellus diam nulla risus elementum sapien imperdiet. Et mattis tincidunt tempor at in ridiculus."
          link="/"
          icon={<GiFlexibleStar size={60} />}
        />
      </div>
    </div>
  );
}

export default ScheduleARideToday;
