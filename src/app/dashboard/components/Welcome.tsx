import BookNowButton from "@/app/(app)/(booking)/components/BookNowButton";
import FixedBookingForm from "@/components/FixedBookingForm";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";

function Welcome() {
  return (
    <div className="flex flex-col gap-7 border-b-2 border-b-gray-200 pb-5">
      <div className="flex flex-col gap-2">
        <p className="text-5xl font-semibold text-primary-100">Welcome User</p>{" "}
        <p className="text-gray-700">What would you like to do today?</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant={"primary_100"}>Book a Vehicle</Button>

        <Modal
          size={"5xl"}
          trigger={<Button variant={"outline"}>Book a Bus Ride</Button>}
          body={
            <div>
              <FixedBookingForm />
            </div>
          }
          header={<div></div>}
        />
        <Button variant={"outline"}>Upload a vehicle for booking</Button>
      </div>
    </div>
  );
}

export default Welcome;
