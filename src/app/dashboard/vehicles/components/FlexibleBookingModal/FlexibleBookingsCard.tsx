import { FlexibleBooking } from "@/lib/types/flexiblebooking";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";

type Props = {
  booking: FlexibleBooking;
};

function FlexibleBookingsCard({ booking }: Props) {
  return (
    <Link
      href={`/dashboard/vehicles/${booking.id}`}
      className="flex flex-col gap-3 md:gap-5 border-2 rounded-2xl w-full hover:scale-[1.02] transition-all
    duration-300 cursor-pointer">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
        <Image
          fill
          objectFit="cover"
          alt={booking.vehicle.name}
          src={`https://res.cloudinary.com/daurieb51/${booking.vehicle.images[0]?.image}`}
        />
      </div>
      <div className="px-5  flex flex-col gap-1 items-start">
        <div className="flex items-center  gap-2 flex-wrap">
          <p className="text-xs w-fit px-2 py-1 text-white rounded-md bg-primary-100 font-bold">
            {booking.vehicle.type.name}
          </p>
          <p className=" text-primary font-bold">
            {booking.vehicle.model.name}
          </p>
          <p className="text-xl text-primary font-bold">
            {booking.vehicle.name}
          </p>
        </div>

        <div className="flex flex-col gap-0 mt-1 items-start text-sm">
          <p>
            From : {moment(booking.start_date).format("Do MMMM YYYY mm:ss")}
          </p>
          <p>To: {moment(booking.end_date).format("Do MMMM YYYY mm:ss")}</p>
        </div>
      </div>
      <div className="flex w-full justify-between px-5 pb-5">
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1">
            <TbCoins /> {" "}
            <span className="text-primary font-bold">{booking.cost}</span>
          </p>
          <p>
            Paid:{" "}
            <span>
              {booking.is_paid ? (
                <span className="text-green-900">Yes</span>
              ) : (
                <span>No</span>
              )}
            </span>
          </p>
        </div>
        <FaEye size={20} />
      </div>{" "}
    </Link>
  );
}

export default FlexibleBookingsCard;
