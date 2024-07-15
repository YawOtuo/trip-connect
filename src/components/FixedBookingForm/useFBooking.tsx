import useFixedBooking from "@/lib/hooks/useFixedBookings";
import { useFixedBookingFormStore } from "./FixedBookingStore";
import { pages } from "./pagesData";
import { useAppStore } from "@/lib/store/useAppStore";
import { useTellUsMoreStore } from "./components/TellUsMore/useTellUsMoreStore";

function useFBooking() {
  const { setProgressValue, activePage, setActivePage } = useFixedBookingFormStore();
  const { createFixedBooking } = useFixedBooking();
  const {DBDetails} = useAppStore()
  const { setScheduleSelected, scheduleSelected, selectedBus, setSelectedBus } =
  useTellUsMoreStore();

  const handleBack = () => {
    setActivePage((prev) => {
      const newPage = Math.max(prev - 1, 0);
      setProgressValue((newPage / (pages.length - 1)) * 100);
      return newPage;
    });
  };

  const handleContinue = () => {
    setActivePage((prev) => {
      const newPage = Math.min(prev + 1, pages.length - 1);
      setProgressValue((newPage / (pages.length - 1)) * 100);
      return newPage;
    });
  };

  const handleCreateFixedBooking = () => {
    createFixedBooking({
      user_id : DBDetails?.id,
      bus_schedule_id: scheduleSelected,
      bus_id: selectedBus?.id ?? null
    })
  }

  return {
    handleBack,
    handleContinue,
    handleCreateFixedBooking
  };
}

export default useFBooking;
