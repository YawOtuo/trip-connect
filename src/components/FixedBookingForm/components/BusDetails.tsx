import React from "react";
import FramerWrapper from "@/components/FramerWrapper"; // Check this import path
import { fadeIn } from "@/lib/animations"; // Check this import path
import Image from "next/image";
import { FaCheck, FaTimes, FaChair } from "react-icons/fa"; // Ensure react-icons is installed
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import { useAppStore } from "@/lib/store/useAppStore";
import FixedBookingControls from "./FixedBookingControls";
import { Button } from "@/components/ui/button";
import { busPics } from "@/lib/utils";

function BusDetails() {
  const {
    setScheduleSelected,
    selectedBus,
    customSeat,
    setSelectedBus,
    setCustomSeat,
  } = useTellUsMoreStore();

  return (
    <FramerWrapper {...fadeIn} className="h-full  ">
      <div className="flex flex-col items-center p-4 pb-5 h-full   ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center justify-center gap-5 w-full h-full ">
          <div className="relative aspect-[3/2] w-full max-w-[200px] md:max-w-full">
            <Image
              src={busPics[selectedBus?.bus_type ?? "VIP"]} // Ensure this image path is correct
              alt="Bus"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-5 w-full md:w-fit  ">
            <div className="group  border  rounded-md p-4 flex flex-col justify-between">
              <p>Your Bus is:</p>
              <p className="text-primary text-3xl font-bold">
                #{selectedBus?.vehicle.vehicle_number}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center mb-2">
                <FaChair className="text-primary mr-2" />
                <p>{selectedBus?.booked_seats.length}/30 seats booked</p>
              </div>
              <p>Would you like to select your own seat?</p>
              <div className="flex items-center justify-start gap-5 mb-10 md:mb-0">
                <Button
                  onClick={() => setCustomSeat(true)}
                  size={"sm"}
                  variant={customSeat ? "default" : "outline"}
                  className="flex items-center gap-1 ">
                  <FaCheck />
                  <p>Yes</p>
                </Button>

                <Button
                  onClick={() => setCustomSeat(false)}
                  size={"sm"}
                  variant={!customSeat ? "default" : "outline"}
                  className="flex items-center gap-1">
                  <FaTimes />
                  <p>No</p>
                </Button>
              </div>
            </div>
            <div className=" ">
              <FixedBookingControls />
            </div>{" "}
          </div>
        </div>
      </div>
    </FramerWrapper>
  );
}

export default BusDetails;
