import { useState, useEffect } from "react";
import BackAndContinueControls from "./BackAndContinueControls";
import TextInput from "@/components/ui/textinput";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";
import { useAppStore } from "@/lib/store/useAppStore";
import Link from "next/link";

function FlexiTellUsMore() {
  const { setStartDate, endDate, startDate, setEndDate, setPurposeOfOrder } =
    useFlexibleBookingFormStore();
  const { DBDetails } = useAppStore();

  const [dateError, setDateError] = useState("");

  const validateDates = (start: string, end: string) => {
    const today = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate < today) {
      return "Start date must be in the future.";
    }

    if (endDate < startDate) {
      return "End date must be after the start date.";
    }

    return "";
  };

  useEffect(() => {
    if (startDate && endDate) {
      const error = validateDates(startDate, endDate);
      setDateError(error);
    }
  }, [startDate, endDate]);

  return (
    <>
      {DBDetails?.email ? (
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5 relative px-5 lg:px-10 md:min-h-[90vh] items-center">
          <div className="flex w-full shrink-0 basis-[40%] flex-col gap-5 md:gap-10 items-start justify-center">
            <div className="flex items-center justify-center">
              <IoDocumentTextOutline className="h-6 w-8 text-primary mr-2" />
              <span className="text-primary text-2xl font-semibold">
                Tell Us More
              </span>
            </div>

            <div className="w-full flex flex-col gap-10 relative">
              <div className="flex flex-col space-y-2">
                <TextInput
                  required
                  type="date"
                  label="When will you like to start using the vehicle"
                  name="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <TextInput
                  required
                  type="date"
                  label="When will you return the vehicle?"
                  name="endDate"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <TextInput
                  type="text"
                  label="What are you using the vehicle for? (optional)"
                  name="purposeOfOrder"
                  onChange={(e) => setPurposeOfOrder(e.target.value)}
                />
              </div>
              {dateError && (
                <div className="text-red-500 text-sm">{dateError}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center h-full gap-5 md:gap-10 w-full md:w-[50%]">
            <div className="w-full border rounded-lg border-[#D9D9D9] flex flex-col">
              <div className="bg-[#D9D9D94C] h-8 flex items-center px-4 rounded-lg mt-4 ml-3 mr-3">
                <IoDocumentTextOutline />
                <span className="text-primary ml-2 font-bold mt-0.5">
                  Notice
                </span>
              </div>
              <div
                className="h-full w-full p-4 rounded-lg"
                style={{ backgroundColor: "transparent" }}>
                <p className="mb-1">
                  By booking a vehicle, you agree to our terms and conditions.
                  Please ensure that the start and return dates are accurate.
                  Any changes to the booking must be communicated at least 24
                  hours in advance. Late returns may incur additional charges.
                </p>
                <p>
                  The vehicle must be returned in the same condition as it was
                  provided. For more details, please refer to our full terms and
                  conditions.
                </p>
              </div>
            </div>
            <BackAndContinueControls
              showForwardButton={Boolean(startDate && endDate && !dateError)}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center text-left gap-4 flex-col justify-center h-[50vh]">
          <p className="text-2xl text-primary fonr-bold">
            Please log in before proceeding
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link href="/login">Login</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/flexible-bookings">Go Back</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default FlexiTellUsMore;
