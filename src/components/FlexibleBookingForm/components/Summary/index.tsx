import BackAndContinueControls from "../BackAndContinueControls";
import useFlexibleBookingForm from "../../useFlexibleBookingForm";
import { useFlexibleBookingFormStore } from "../../useFlexibleBookingFormStore";
import Image from "next/image";
import UserDetailsSummary from "./components/UserDetailsSummary";
import VehicleDetailsSummary from "./components/VehicleDetailsSummary";
import CostSummary from "./components/CostSummary";
import OrderDetailsSummary from "./components/OrderDetailsSummary";
function Summary() {
  const { selectedVehicle, startDate, endDate, purposeOfOrder, user } =
    useFlexibleBookingFormStore();
  return (
    <div className="px-5 lg:px-10 flex flex-col gap-5">
      <div className="px-5 py-5 font-bold text-primary text-2xl">
        <h1>SUMMARY</h1>
      </div>
      <div className="flex flex-col gap-1">
        <VehicleDetailsSummary />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-5">
        <UserDetailsSummary />
        <CostSummary />
      </div>
      <div className="px-4 py-4">
        <BackAndContinueControls ready />
      </div>
    </div>
  );
}

export default Summary;
