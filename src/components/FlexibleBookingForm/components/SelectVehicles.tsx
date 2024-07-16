import useVehicles from "@/lib/hooks/useVehicles";
import { useFlexibleBookingStore } from "../FlexibleBookingStore";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BackAndContinueControls from "./BackAndContinueControls";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";

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
  return (
    <FramerWrapper
      {...fadeIn}
      className="grid grid-cols-2 gap-5 lg:gap-10 h-full items-center justify-center px-5 py-5">
      <div className="col-span-2 lg:col-span-1 h-[35vh] lg:h-full ">
        {selectedVehicle && selectedVehicle?.images?.length > 0 ? (
          <div className="overflow-hidden rounded-md relative h-full min-h-[90vh]">
            <Image
              objectFit="cover"
              fill
              src={`https://res.cloudinary.com/daurieb51/${selectedVehicle.images[0]?.image}`}
              alt={`${selectedVehicle.model} ${selectedVehicle.model}`}
            />
          </div>
        ) : (
          <div className=" flex items-center justify-center min-h-[90vh] border-2 cursor-pointer rounded-lg">
            Select a vehicle to view
          </div>
        )}{" "}
      </div>
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p>Types</p>

          <div className="flex flex-wrap gap-5">
            {vehicleTypes?.map((r) => (
              <Button
                key={r}
                size={"sm"}
                className="w-fit px-10"
                onClick={() => setSelectedVehicleType(r)}
                variant={`${
                  selectedVehicleType === r ? "primary_100" : "outline"
                }`}>
                {r}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Models</p>
          <div className="flex flex-wrap gap-5">
            {vehicleModels?.map((r) => (
              <Button
                size={"sm"}
                className="w-fit px-8"
                key={r}
                onClick={() => setSelectedVehicleModel(r)}
                variant={`${
                  selectedVehicleModel === r ? "primary_100" : "outline"
                }`}>
                {r}
              </Button>
            ))}
            {!selectedVehicleType && <p>Select a vehicle type</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Vehicles</p>
          <div className="flex flex-wrap gap-5">
            {vehicles?.map((r) => (
              <Button
                // size={"sm"}
                className="w-fit"
                key={r.id}
                onClick={() => setSelectedVehicle(r)}
                variant={`${
                  selectedVehicle?.id === r.id ? "default" : "outline"
                }`}>
                {r.name}
              </Button>
            ))}
            {(!selectedVehicleModel) && <p>Select a vehicle model</p>}
          </div>
        </div>
        <div className="mt-10">
          <BackAndContinueControls />
        </div>{" "}
      </div>
    </FramerWrapper>
  );
}

export default SelectVehicles;
