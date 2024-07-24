import { useFlexibleBookingFormStore } from "@/components/FlexibleBookingForm/useFlexibleBookingFormStore";
import Image from "next/image";
import { BsCarFront } from "react-icons/bs";

function VehicleDetailsSummary() {
    const { selectedVehicle, startDate, endDate, purposeOfOrder, user } = useFlexibleBookingFormStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
      {selectedVehicle && (
        <div className="relative w-full md:max-w-[50vw] aspect-[3/2] overflow-hidden rounded-md">
          {" "}
          <Image
            key={selectedVehicle?.id}
            objectFit="cover"
            fill
            src={`https://res.cloudinary.com/daurieb51/${selectedVehicle.images[0]?.image}`}
            alt={`${selectedVehicle?.model.name} ${selectedVehicle?.model.name}`}
            // onLoadingComplete={() => setImageLoading(false)}
          />
        </div>
      )}
      <div className="w-full">
        <h1 className="px-0 md:px-10 text-2xl font-bold">
          {selectedVehicle?.name}
        </h1>
        {/* Vehicle Details */}
        <div className="border-[2px] rounded-md w-[400px] h-[205px] m-[10px] p-5">
          <div className="flex px-0 py-5 text-pink-800">
            <BsCarFront className="text-[30px]" />
            <h1 className="px-4 font-bold text-[22px]">Vehicle Details</h1>
          </div>
          <div className="px-8">
            <h1 className="font-light flex">
              Type:{" "}
              <div className="font-bold px-5">
                {selectedVehicle?.type?.name}
              </div>
            </h1>
            <h1 className="font-light flex">
              Model:{" "}
              <div className="font-bold px-5">
                {selectedVehicle?.model?.name}
              </div>
            </h1>
            <h1 className="font-light flex">
              Name:{" "}
              <div className="font-bold px-5">{selectedVehicle?.name}</div>
            </h1>
          </div>

          {/* <div className="flex font-bold px-[10px] justify-end">
          <BsPencil />

          <h1 className="px-3">Change</h1>
        </div> */}
        </div>

        {/* Pick Up Details */}

        {/* <div className="border-[2px] rounded-md w-[400px] h-[205px] m-[10px] p-5">
        <div className="flex px-0 py-5 text-pink-800">
          <BsList className="text-[30px]" />
          <h1 className="px-4 font-bold text-[22px]">Pick Up Details</h1>
        </div>
        <div className="px-8">
          <h1 className="font-light flex">
            Pick Up Location: <div className="font-bold px-5">Accra</div>
          </h1>
          <h1 className="font-light flex">
            Pick Up Location: <div className="font-bold px-5">Accra</div>
          </h1>
          <h1 className="font-light flex">
            Pick Up Location: <div className="font-bold px-5">Accra</div>
          </h1>
        </div>

        <div className="flex font-bold px-[7px] justify-end">
          <BsPencil />

          <h1 className="px-3">Change</h1>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default VehicleDetailsSummary;
