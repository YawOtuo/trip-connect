import React from "react";
import FramerWrapper from "@/components/FramerWrapper"; // Check this import path
import { fadeIn } from "@/lib/animations"; // Check this import path
import Image from "next/image";
import { FaCheck, FaTimes, FaChair } from "react-icons/fa"; // Ensure react-icons is installed
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";

function BusDetails() {
  const { setScheduleSelected, selectedBus, setSelectedBus } =
    useTellUsMoreStore();

  return (
    <FramerWrapper {...fadeIn}>
      <div className="flex flex-col items-center p-4">
        <div className="h-full bg-primary w-1/3"></div>

        <div className="flex items-center justify-center gap-5 w-full mb-4">
          <Image
            src="/Bismarkbus.png" // Ensure this image path is correct
            alt="Bus"
            className="bus-details-image"
            width={486}
            height={396}
          />
          <div className="flex flex-col gap-5">
            <div
              className="bus-details-container border  rounded-md p-4 flex flex-col justify-between"
              style={{ width: "418px" }}>
              <p>Your Bus is:</p>
              <p className="text-primary text-3xl font-bold">#{selectedBus?.vehicle.vehicle_number}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center mb-2">
                <FaChair className="text-primary mr-2" />
                <p>{selectedBus?.booked_seats_count}/30 seats available</p>
              </div>
              <p>Would you like to select your own seat?</p>
              <div className="flex items-center justify-start gap-5 ">
                <div className="flex items-center gap-1 text-slate-500 ">
                  <FaCheck className="text-primary" />
                  <p>Yes</p>
                </div>
                <div className="flex items-center gap-1 text-slate-500">
                  <FaTimes className="text-primary " />
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FramerWrapper>
  );
}

export default BusDetails;
