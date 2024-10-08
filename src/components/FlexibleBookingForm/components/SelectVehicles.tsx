import useVehicles from "@/lib/hooks/useVehicles";
import { useFlexibleBookingStore } from "../FlexibleBookingStore";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import { useState, useEffect } from "react";
import FlexibleBookingBackAndContinueControls from "./BackAndContinueControls";

function SelectVehicles() {
  const {
    selectedVehicleModel,
    setSelectedVehicleModel,
    selectedVehicle,
    setSelectedVehicleType,
    selectedVehicleType,
    setSelectedVehicle,
  } = useFlexibleBookingFormStore();

  const {
    vehicleModels,
    isvehicleModelsLoading,
    vehicleTypes,
    isvehicleTypesLoading,
    vehicles,
    isvehiclesLoading,
  } = useVehicles({
    type: selectedVehicleType,
    model: selectedVehicleModel,
  });

  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (selectedVehicle && selectedVehicle.images.length > 0) {
      setImageLoading(true);
    }
  }, [selectedVehicle]);

  return (
    <FramerWrapper
      {...fadeIn}
      className="flex flex-col lg:flex-row gap-10 lg:gap-10 h-full items-center justify-center px-5 py-5">
      <div className="order-2 h-full w-full">
        {selectedVehicle && selectedVehicle?.images?.length > 0 ? (
          <FramerWrapper
            {...fadeIn}
            className="overflow-hidden rounded-md relative w-full h-full min-h-[50vh] lg:min-h-[90vh]">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p>Loading image...</p>
              </div>
            )}
            <Image
              key={selectedVehicle.id}
              objectFit="cover"
              fill
              src={`https://res.cloudinary.com/daurieb51/${selectedVehicle.images[0]?.image}`}
              alt={`${selectedVehicle.model.name} ${selectedVehicle.model.name}`}
              onLoadingComplete={() => setImageLoading(false)}
            />
          </FramerWrapper>
        ) : (
          <div className="flex items-center justify-center min-h-[50vh] md:min-h-[90vh] border-2 cursor-pointer rounded-lg">
            Select a vehicle to view
          </div>
        )}
        <div className="lg:hidden mt-20">
          <FlexibleBookingBackAndContinueControls />
        </div>
      </div>
      <div className="w-full order-1 col-span-1 flex flex-col gap-5 basis-[45%]">
        <div className="flex flex-col gap-2 items-start">
          <p>Types</p>
          <div className="flex flex-wrap gap-5 transition-all">
            {vehicleTypes?.map((r) => (
              <Button
                key={r}
                size={"sm"}
                className="w-fit px-10 transition-all"
                onClick={() => setSelectedVehicleType(r)}
                variant={`${
                  selectedVehicleType === r ? "primary_100" : "outline"
                }`}>
                {r}
              </Button>
            ))}
            {isvehicleTypesLoading && <p>Loading</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p>Models</p>
          <div className="flex flex-wrap gap-5 transition-all">
            {vehicleModels?.map((r) => (
              <Button
                size={"sm"}
                className="w-fit px-8 transition-all duration-300"
                key={r}
                onClick={() => setSelectedVehicleModel(r)}
                variant={`${
                  selectedVehicleModel === r ? "primary_100" : "outline"
                }`}>
                {r}
              </Button>
            ))}
            {!selectedVehicleType && <p>Select a vehicle type</p>}
            {isvehicleModelsLoading && <p>Loading</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p>Vehicles</p>
          <div className="flex flex-wrap gap-5">
            {vehicles?.map((r) => (
              <Button
                className="w-fit"
                key={r.id}
                onClick={() => setSelectedVehicle(r)}
                variant={`${
                  selectedVehicle?.id === r.id ? "primary_100" : "outline"
                }`}>
                {r.name}
              </Button>
            ))}
            {!selectedVehicleModel && <p>Select a vehicle model</p>}
            {isvehiclesLoading && <p>Hold on! Getting you a vehicle</p>}
          </div>
        </div>
        <div className="w-full hidden lg:block mt-20">
          <FlexibleBookingBackAndContinueControls
            showForwardButton={Boolean(selectedVehicle?.id)}
          />
        </div>
      </div>
    </FramerWrapper>
  );
}

export default SelectVehicles;
