import { Button } from "@/components/ui/button";
import FixedBookingControls from "./FixedBookingControls";

function Confirm() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <p>All is set</p>

      <div className="flex w-full gap-5">
        <FixedBookingControls ready={true} />
        
      </div>
    </div>
  );
}

export default Confirm;
