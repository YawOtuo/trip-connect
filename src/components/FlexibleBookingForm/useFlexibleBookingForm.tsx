import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import { useFlexibleBookingStore } from "./FlexibleBookingStore";
import { pages } from "./pagesData";
import { useFlexibleBookingFormStore } from "./useFlexibleBookingFormStore";
import { useAppStore } from "@/lib/store/useAppStore";

function useFlexibleBookingForm() {
  const { setProgressValue, activePage, setActivePage } =
    useFlexibleBookingStore();
  const { user, startDate, endDate, purposeOfOrder, selectedVehicle } =
    useFlexibleBookingFormStore();
  const { createFlexibleBooking } = useFlexibleBookings();
  const { DBDetails } = useAppStore();
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

  const handleCreateFlexibleBooking = () => {
    createFlexibleBooking({
      purpose: purposeOfOrder,
      start_date: startDate,
      end_date: endDate,
      vehicle: selectedVehicle?.id,
      user: Number(DBDetails?.id),
    });
  };

  return {
    handleBack,
    handleContinue,
    handleCreateFlexibleBooking,
  };
}

export default useFlexibleBookingForm;
