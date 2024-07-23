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

        <Link href={link}>
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
    <div className="w-full flex flex-col gap-20 bg-primary-100 text-white px-5 lg:px-20 py-10 lg:py-20 my-2 min-h-[70vh] items-start justify-center">
      <h1 className="text-3xl lg:text-5xl font-semibold">
        Schedule a ride today
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <RideType
          label="Flexible Booking"
          text="Our Flexible Booking service allows you to rent a vehicle whenever you need it, giving you the freedom to travel on your own schedule. Choose from a variety of vehicles and enjoy the convenience of booking at any time.."
          link="/flexible-bookings"
          icon={<LuLocateFixed size={60} />}
        />
        <RideType
          label="Fixed Booking"
          text="With our Fixed Booking service, you can reserve a seat on one of our scheduled buses, ensuring reliable and timely travel. Choose from a range of pre-determined departure times and routes to fit your itinerary."
          // link="/fixed-bookings"
          link="/fixed-bookings"
          icon={<GiFlexibleStar size={60} />}
        />
      </div>
    </div>
  );
}

export default ScheduleARideToday;
