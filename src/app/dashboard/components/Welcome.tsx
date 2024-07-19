"use client"
import BookNowButton from "@/app/(app)/(booking)/components/BookNowButton";
import FixedBookingForm from "@/components/FixedBookingForm";
import FlexibleBookingForm from "@/components/FlexibleBookingForm";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";

function Welcome() {
  const { DBDetails } = useAppStore();
  return (
    <div className="flex flex-col gap-7 border-b-2 border-b-gray-200 pb-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl md:text-6xl font-semibold text-primary-100">
          Welcome <span className="text-primary">{DBDetails?.username},</span>
        </h2>{" "}
        <p className="text-gray-700">What would you like to do today?</p>
      </div>
      <div className="flex w-full flex-col lg:flex-row gap-2 md:gap-5 items-start lg:items-center ">
        <Modal
          size={"5xl"}
          trigger={<Button className=" md:px-20 w-full md:w-fit" variant={"primary_100"}>Book a Bus Ride</Button>}
          body={
            <div>
              <FixedBookingForm />
            </div>
          }
          header={<div></div>}
        />

        <Link href={"/flexible-bookings/form"} className="w-full">
          <Button variant={"outline"} className="md:px-20 w-full md:w-fit">Book a Vehicle </Button>
        </Link>
        {/* <Button variant={"outline"}>Upload a vehicle for booking</Button> */}
      </div>
    </div>
  );
}

export default Welcome;
