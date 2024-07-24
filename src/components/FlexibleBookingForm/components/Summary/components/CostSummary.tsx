import { useFlexibleBookingFormStore } from "@/components/FlexibleBookingForm/useFlexibleBookingFormStore";

function CostSummary() {
  const { selectedVehicle, startDate, endDate, purposeOfOrder, user } =
    useFlexibleBookingFormStore();
  return (
    <div className="flex   flex-col items-start justify-center w-full py-5 border px-5">
      <div className=" font-bold  rounded-md">
        <h1 className=" justify-center ">
          Your Cost is <p className="text-5xl text-primary"> GHS {selectedVehicle?.rental_price}</p>
        </h1>
      </div>



    </div>
  );
}

export default CostSummary;
