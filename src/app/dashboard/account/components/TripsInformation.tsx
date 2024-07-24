import { useAppStore } from "@/lib/store/useAppStore";
import { DetailItem } from "./PersonalInformation";

function TripsInformation() {
  const { DBDetails } = useAppStore();

  return (
    <div className="flex flex-col gap-1">
      <div className="text-pink-800 font-bold">Trips Information</div>

      <div className="flex flex-col gap-1">
        <DetailItem name="Number of Trips" />
        <DetailItem name="Total Amount Spent" />
        <DetailItem name="Last Trip date" />
      </div>
    </div>
  );
}

export default TripsInformation;
