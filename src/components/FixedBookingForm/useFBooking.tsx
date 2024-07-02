import { useFixedBookingFormStore } from "./FixedBookingStore";
import { pages } from "./pagesData";

function useFBooking() {
  const { setProgressValue, activePage, setActivePage } = useFixedBookingFormStore();

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

  return {
    handleBack,
    handleContinue,
  };
}

export default useFBooking;
