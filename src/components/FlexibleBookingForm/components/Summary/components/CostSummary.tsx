import { useFlexibleBookingFormStore } from "@/components/FlexibleBookingForm/useFlexibleBookingFormStore";

export const calculateDays = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return Math.max(Math.ceil(daysDifference), 1);
};

function CostSummary() {
  const { selectedVehicle, startDate, endDate, purposeOfOrder, user } =
    useFlexibleBookingFormStore();

  // Calculate the number of days
  const numberOfDays = calculateDays(String(startDate), String(endDate));

  // Calculate the total cost and format to 2 decimal places
  const totalCost = selectedVehicle
    ? (numberOfDays * selectedVehicle.rental_price).toFixed(2)
    : "0.00";

  return (
    <div className="flex flex-col items-start justify-center w-full py-5 border-2 px-5 rounded-md h-full">
      <div className="font-bold rounded-md">
        <h1 className="justify-center">
          Your Cost is <p className="text-5xl text-primary">GHS {totalCost}</p>
        </h1>
      </div>
    </div>
  );
}

export default CostSummary;
