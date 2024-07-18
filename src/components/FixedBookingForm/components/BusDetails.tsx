import React from "react";
import FramerWrapper from "@/components/FramerWrapper"; // Check this import path
import { fadeIn } from "@/lib/animations"; // Check this import path
import Image from "next/image";
import { FaCheck, FaTimes, FaChair } from "react-icons/fa"; // Ensure react-icons is installed
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import { useAppStore } from "@/lib/store/useAppStore";
import FixedBookingControls from "./FixedBookingControls";
import { Button } from "@/components/ui/button";

function BusDetails() {
  const {
    setScheduleSelected,
    selectedBus,
    customSeat,
    setSelectedBus,
    setCustomSeat,
  } = useTellUsMoreStore();

  return (
    <FramerWrapper {...fadeIn}>
      <div className="flex flex-col items-center p-4 pb-5">
        <div className="flex items-center justify-center gap-5 w-full ">
          <Image
            src="/Bismarkbus.png" // Ensure this image path is correct
            alt="Bus"
            className="bus-details-image"
            width={486}
            height={396}
          />
          <div className="flex flex-col gap-5">
            <div
              className="group bus-details-container border  rounded-md p-4 flex flex-col justify-between"
              style={{ width: "418px" }}>
              <p>Your Bus is:</p>
              <p className="text-primary text-3xl font-bold">
                #{selectedBus?.vehicle.vehicle_number}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center mb-2">
                <FaChair className="text-primary mr-2" />
                <p>{selectedBus?.booked_seats_count}/30 seats available</p>
              </div>
              <p>Would you like to select your own seat?</p>
              <div className="flex items-center justify-start gap-5 ">
                <Button
                  onClick={() => setCustomSeat(true)}
                  size={"sm"}
                  variant={customSeat ? "default" : "outline"}
                  className="flex items-center gap-1 ">
                  <FaCheck  />
                  <p>Yes</p>
                </Button>
                <Button
                  onClick={() => setCustomSeat(false)}
                  size={"sm"}
                  variant={!customSeat ? "default" : "outline"}
                  className="flex items-center gap-1">
                  <FaTimes  />
                  <p>No</p>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <FixedBookingControls />
      </div>
    </FramerWrapper>
  );
}

export default BusDetails;
