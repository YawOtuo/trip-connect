import { useEffect } from "react";
import BackAndContinueControls from "./BackAndContinueControls";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";
import useVehicles from "@/lib/hooks/useVehicles";
import { useFlexibleBookingStore } from "../FlexibleBookingStore";

function LoadingFlexibleForm() {
  const {
    vehicleModels,
    isvehicleModelsLoading,
    vehicleTypes,
    isvehicleTypesLoading,
    vehicles,
    isvehiclesLoading,
  } = useVehicles();
  const { progressValue, setProgressValue, activePage, setActivePage } =
    useFlexibleBookingStore();

  useEffect(() => {
    if (vehicleTypes) {
      setActivePage(1);
    }
  }, [isvehicleTypesLoading, setActivePage, vehicleTypes]);
  return (
    <FramerWrapper
      {...fadeIn}
      className="bg-primary-100 h-[100dvh] flex flex-col gap-5 justify-center items-center">
      {isvehicleTypesLoading && (
        <p className="text-2xl text-white font-bold">Setting things up for you....</p>
      )}{" "}
      {/* <div className="w-full max-w-[30%]">
        <BackAndContinueControls />
      </div>{" "} */}
      {!isvehicleTypesLoading && !vehicleTypes && <p className="text-white">Could not load vehicles</p>}
    </FramerWrapper>
  );
}

export default LoadingFlexibleForm;
