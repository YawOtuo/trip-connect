import { Vehicle } from "@/lib/types/vehicles";

type Props = {
  vehicle: Vehicle;
};

function VehicleDetails({ vehicle }: Props) {
  return (
    <div className=" flex flex-col gap-1">
      <p className="text-2xl font-bold text-primary">{vehicle.name}</p>
      <p>Model: {vehicle.model.name}</p>
      <p>Type: {vehicle.type.name}</p>
    </div>
  );
}

export default VehicleDetails;
