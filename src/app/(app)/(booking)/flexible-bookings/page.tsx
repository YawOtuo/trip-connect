"use client"
import FixedBookingForm from "@/components/FixedBookingForm";
import FramerWrapper from "@/components/FramerWrapper";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { fadeIn } from "@/lib/animations";
import { GiFlexibleStar } from "react-icons/gi";
import { LuLocateFixed } from "react-icons/lu";
import BookNowButton from "../components/BookNowButton";
import FlexibleBookingForm from "@/components/FlexibleBookingForm";
import Link from "next/link";
import BookingsLayout from "../BookingsLayout";

const Pill = ({ label }: { label: string }) => {
  return (
    <button
      className="relative group border-2 border-white 
    hover:border-primary transition-all duration-700 text-white py-1 px-4 rounded-full overflow-hidden">
      <span className="relative z-10 group-hover:text-white transition-all duration-500 ">
        {label}
      </span>
      <div className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
    </button>
  );
};

const pillOptions = ["LUXURY VEHICLES", "ECONOMY VEHICLES", "SUVs", "SEDANS", "VANS", "ELECTRIC VEHICLES"];


function Page() {
  return (
    <BookingsLayout>
      <div className="w-full">
        <div className="text-white  w-full  flex flex-col gap-5">
          <div className="flex items-start gap-3 flex-col">
            <GiFlexibleStar size={60} />
            <p className="text-3xl lg:text-5xl font-bold">Flexible Booking</p>
          </div>

          <div className="">
            <p>
            Our Flexible Booking service allows you to rent a vehicle exclusively for your needs at any time and on any day.
              Whether you need a car for a spontaneous trip or a planned journey, our flexible booking options provide the convenience and freedom to travel on your own schedule.
              Choose from a variety of vehicles that suit your preferences and enjoy a seamless booking experience tailored to your requirements. 
              With flexible booking, your travel plans are always in your control.
            </p>
          </div>

          <FramerWrapper {...fadeIn} className="flex flex-wrap gap-5">
            {pillOptions?.map((r) => (
              <Pill label={r} key={r} />
            ))}
          </FramerWrapper>

          <div className="w-full flex justify-end mt-5">
            <Link href={"/flexible-bookings/form"} className="w-full md:w-fit">
              <BookNowButton />
            </Link>{" "}
      
          </div>
        </div>
      </div>
    </BookingsLayout>
  );
}

export default Page;
