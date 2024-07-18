import { FixedBooking } from "@/lib/types/booking";

import { CustomSheet } from "@/components/ui/sheet";
import EditFBDetails from "../EditFBDetails";
import TripCard from "./TripsCard";
type Props = {
  fixedbooking: FixedBooking;
};

function TripSheet({ fixedbooking }: Props) {
  return (
    <CustomSheet
      trigger={<TripCard fixedbooking={fixedbooking} />}
      content={
        <div>
          <EditFBDetails data={fixedbooking} />
        </div>
      }
      fullWidth 
      contentClassName="w-[90vw] lg:w-[40vw]"
    />
  );
}

export default TripSheet;
