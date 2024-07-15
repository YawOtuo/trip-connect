"use client";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import useVehicles from "@/lib/hooks/useTransportBuses";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import { useEffect, useTransition } from "react";
import useTransportBuses from "@/lib/hooks/useTransportBuses";
import { useFixedBookingFormStore } from "../FixedBookingStore";

function Searching() {
  const { selectedFrom, selectedTo } = useTellUsMoreStore();

  return (
    <FramerWrapper {...fadeIn}>
      p
    </FramerWrapper>
  );
}

export default Searching;
