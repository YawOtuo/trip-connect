"use client";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";
import useFBooking from "../useFBooking";
import { useEffect } from "react";
import { useFixedBookingFormStore } from "../FixedBookingStore";

function LoadingSchedules() {
  const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
    useTransportSchedules();
  const { progressValue, setProgressValue, setActivePage } =
    useFixedBookingFormStore();

  useEffect(() => {
    if (schedulesFromAndTo) {
      setActivePage(1);
    }
  }, [schedulesFromAndTo, setActivePage]);

  return (
    <div>{isSchedulesFromAndToLoading && <div>Loading Schedules</div>}</div>
  );
}

export default LoadingSchedules;
