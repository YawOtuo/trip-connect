import { CustomSheet } from "@/components/ui/sheet";
import { FixedBooking } from "@/lib/types/booking";
import EditFBDetails from "../EditFBDetails";
import ActiveTripCard from "./ActiveTripCard";
type Props = {
  fixedbooking: FixedBooking;
};
function ActiveTripCardSheet({ fixedbooking }: Props) {
  return (
    <CustomSheet
      trigger={<ActiveTripCard fixedbooking={fixedbooking} />}
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

export default ActiveTripCardSheet;
