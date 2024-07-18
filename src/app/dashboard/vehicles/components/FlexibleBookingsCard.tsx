import { FlexibleBooking } from "@/lib/types/flexiblebooking";
import moment from "moment";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";

type Props = {
  booking: FlexibleBooking;
};

function FlexibleBookingsCard({ booking }: Props) {
  return (
    <div
      className="flex flex-col gap-5 border-2 rounded-md w-full hover:scale-[1.02] transition-all
    duration-300 cursor-pointer">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
        <Image
          fill
          objectFit="cover"
          alt={booking.vehicle.name}
          src={`https://res.cloudinary.com/daurieb51/${booking.vehicle.images[0]?.image}`}
        />
      </div>
      <div className="px-5 py-3 flex flex-col gap-1 ">
        <p className="text-2xl text-primary font-bold">
          {booking.vehicle.name}
        </p>
        <p>
          From : {moment(booking.start_date).format("dddd MMMM YYYY mm:ss")}
        </p>
        <p>To: {moment(booking.end_date).format("dddd MMMM YYYY mm:ss")}</p>
      </div>
      <div className="flex w-full justify-end px-5 pb-5">
        <FaEye size={20} />
      </div>{" "}
    </div>
  );
}

export default FlexibleBookingsCard;
