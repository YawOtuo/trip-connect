import Bus from "@/components/Bus";
import { TransportBus, Vehicle } from "@/lib/types/vehicles";

type Props = {
  bus: TransportBus;
};

function TripOrderDetails({bus} : Props) {
  return (
    <div className=" flex flex-col gap-1">
      <Bus  selectedBus={bus}  />
    </div>
  );
}

export default TripOrderDetails;
