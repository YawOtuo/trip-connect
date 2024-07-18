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
          className="px-14"
          onClick={handleBack}>
          Back
        </Button>
      )}
      {showForwardButton && (
        <div>
          {!ready && (
            <Button
              size={"sm"}
              className="px-14"
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
              className="px-14"
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
