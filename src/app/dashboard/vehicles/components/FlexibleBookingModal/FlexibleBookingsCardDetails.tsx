import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import { FlexibleBooking } from "@/lib/types/flexiblebooking";
import useVehicles from "../../useVehicles";
import Image from "next/image";

type Props = {
  flexibleBooking: FlexibleBooking;
};

function FlexibleBookingsCardDetails({ flexibleBooking }: Props) {
  const { handlePayment } = useVehicles();
  return (
    <div className="grid grid-cols-1 bg-primary-100">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
        <Image
          fill
          objectFit="cover"
          alt={flexibleBooking.vehicle.name}
          src={`https://res.cloudinary.com/daurieb51/${flexibleBooking.vehicle.images[0]?.image}`}
        />
      </div>
      <div className="flex flex-col h-fit">
        <CheckoutButton onClick={() => handlePayment(flexibleBooking.cost, flexibleBooking.id)} />
      </div>{" "}
    </div>
  );
}

export default FlexibleBookingsCardDetails;
