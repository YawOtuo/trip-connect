import useFixedBooking from "@/lib/hooks/useFixedBookings";
import { useFixedBookingFormStore } from "./FixedBookingStore";
import { pages } from "./pagesData";
import { useAppStore } from "@/lib/store/useAppStore";
import { useTellUsMoreStore } from "./components/TellUsMore/useTellUsMoreStore";
import useNotifications from "@/lib/hooks/useNotifications";

function useFBooking() {
  const { setProgressValue, activePage, setActivePage } =
    useFixedBookingFormStore();
  const { createFixedBooking } = useFixedBooking();
  const { DBDetails } = useAppStore();
  const { createNotification } = useNotifications();
  const {
    setScheduleSelected,
    scheduleSelected,
    selectedBus,
    setSelectedBus,
    setSubmissionResult,
    setIsSubmitting,
    setIsModalOpen,
    selectedSeats,
  } = useTellUsMoreStore();

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

      // if (newPage === pages.length - 1 && prev !== newPage) {
      //   // Replace `closeModal` with your actual function to close the modal
      //   setIsModalOpen(false);
      //   return newPage;
      // }
      setProgressValue((newPage / (pages.length - 1)) * 100);
      return newPage;
    });
  };

  const handleCreateFixedBooking = async () => {
    setIsSubmitting(true);
    handleContinue();
    const result = await createFixedBooking({
      user_id: Number(DBDetails?.id),
      bus_schedule_id: Number(scheduleSelected?.id),
      bus_id: selectedBus?.id ?? null,
      cost: Number(scheduleSelected?.price) * (selectedSeats.length || 1),
    });
    createNotification({
      subject: `You have an upcoming trip to ${scheduleSelected?.travelling_to} on ${scheduleSelected?.departure_time}`,
      message: "Way to go! Let's get packing",
      type: "alert",
      user: Number(DBDetails?.id),
    });
    if (result) setIsSubmitting(false);
    setSubmissionResult(result);
  };

  return {
    handleBack,
    handleContinue,
    handleCreateFixedBooking,
  };
}

export default useFBooking;
