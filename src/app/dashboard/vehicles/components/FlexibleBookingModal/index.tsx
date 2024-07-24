import { Modal } from "@/components/ui/dialog";
import FlexibleBookingsCard from "./FlexibleBookingsCard";
import { FlexibleBooking } from "@/lib/types/flexiblebooking";
import FlexibleBookingsCardDetails from "./FlexibleBookingsCardDetails";

type Props = {
  flexibleBooking: FlexibleBooking;
};

function FlexibleBookingModal({ flexibleBooking }: Props) {
  return (
    <Modal
      trigger={<FlexibleBookingsCard booking={flexibleBooking} />}
      body={<FlexibleBookingsCardDetails flexibleBooking={flexibleBooking} />}
      size={"2xl"}
    />
  );
}

export default FlexibleBookingModal;
