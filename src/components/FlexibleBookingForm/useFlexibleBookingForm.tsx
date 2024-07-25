import useFlexibleBookings from "@/lib/hooks/useFlexibleBookings";
import { useFlexibleBookingStore } from "./FlexibleBookingStore";
import { pages } from "./pagesData";
import { useFlexibleBookingFormStore } from "./useFlexibleBookingFormStore";
import { useAppStore } from "@/lib/store/useAppStore";
import { calculateDays } from "./components/Summary/components/CostSummary";
import useNotifications from "@/lib/hooks/useNotifications";

function useFlexibleBookingForm() {
  const { setProgressValue, activePage, setActivePage } =
    useFlexibleBookingStore();
  const { user, startDate, endDate, purposeOfOrder, selectedVehicle } =
    useFlexibleBookingFormStore();
  const { createFlexibleBooking } = useFlexibleBookings();
  const { DBDetails } = useAppStore();
  const { setIsSubmitting, setSubmissionResult } =
    useFlexibleBookingFormStore();
  const { createNotification } = useNotifications();
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

  const handleCreateFlexibleBooking = async () => {
    setIsSubmitting(true);
    handleContinue();
    const result = await createFlexibleBooking({
      purpose: purposeOfOrder,
      start_date: startDate,
      end_date: endDate,
      vehicle: selectedVehicle?.id,
      user: Number(DBDetails?.id),
      cost: selectedVehicle
        ? calculateDays(String(startDate), String(endDate)) *
          selectedVehicle?.rental_price
        : 1,
    });

    createNotification({
      subject: `Boss, ${selectedVehicle?.name} is about to be yours`,
      message: "Ready! Set....",
      type: "alert",
      user: Number(DBDetails?.id),
    });
    if (result) setIsSubmitting(false);
    setSubmissionResult(result);
  };

  return {
    handleBack,
    handleContinue,
    handleCreateFlexibleBooking,
  };
}

export default useFlexibleBookingForm;
