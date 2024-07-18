import { Button } from "@/components/ui/button";
import { useFixedBookingFormStore } from "../FixedBookingStore";
import useFBooking from "../useFBooking";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import { pages } from "../pagesData";
import { useAppStore } from "@/lib/store/useAppStore";

type Props = {
  showBackButton?: boolean;
  showForwardButton?: boolean;
  ready?: boolean;
  close?: boolean;
};
function FixedBookingControls({
  showBackButton = true,
  showForwardButton = true,
  ready,
  close,
}: Props) {
  const { progressValue, setProgressValue, activePage } =
    useFixedBookingFormStore();
  const { handleBack, handleContinue, handleCreateFixedBooking } =
    useFBooking();
  const { setScheduleSelected, selectedBus, setSelectedBus, setIsModalOpen } =
    useTellUsMoreStore();
  const { DBDetails } = useAppStore();

  return (
    <div className="w-full flex gap-5 items-center justify-end">
      {showBackButton && (
        <Button
          size={"sm"}
          variant={"outline"}
          className="md:px-14 w-full md:w-fit"
          onClick={handleBack}>
          Back
        </Button>
      )}
      {showForwardButton && (
        <div className="w-full md:w-fit">
          {!ready && (
            <Button
              size={"sm"}
              className="md:px-14 w-full md:w-fit"
              onClick={() => {
                handleContinue()
                close && setIsModalOpen(false)
              }}>
              {close ? "Finish" : "Continue"}
            </Button>
          )}
          {ready && (
            <Button
              size={"sm"}
              className="md:px-14 w-full md:w-fit"
              onClick={() => handleCreateFixedBooking()}>
              {DBDetails?.id && "Book"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default FixedBookingControls;
