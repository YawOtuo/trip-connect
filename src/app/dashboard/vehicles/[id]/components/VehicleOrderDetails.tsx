import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import { FlexibleBooking } from "@/lib/types/flexiblebooking";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbCoins } from "react-icons/tb";
import useVehicles from "../../useVehicles";

type Props = {
  data: FlexibleBooking;
};

function VehicleOrderDetails({ data }: Props) {
  const { handlePayment } = useVehicles();
  return (
    <div className="flex flex-col gap-1 w-full">
      <div>
        <p className=""> Date Booked:{data.created_at}</p>
      </div>

      <div className="flex flex-col items-start gap-1">
        Booked From :
        <div className="flex items-center gap-3 flex-wrap">
          <p>{data.start_date}</p>
          <FaLongArrowAltRight />
          <p> {data.end_date}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {" "}
        <TbCoins className="text-primary-100" size={25} />
        <p className="text-primary text-2xl font-bold">GHS {data.cost}</p>
      </div>
      <div>
        {!data.is_paid && (
          <div className="flex flex-col h-fit">
            <CheckoutButton onClick={() => handlePayment(data.cost, data.id)} />
          </div>
        )}

        {data.is_paid && (
          <div className="flex items-center justify-center font-bold border-2 rounded-lg py-3 w-full uppercase bg-green-700 text-white">
            Booked
          </div>
        )}
      </div>
    </div>
  );
}

export default VehicleOrderDetails;
