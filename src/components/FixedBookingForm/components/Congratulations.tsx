"use client";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import { useTellUsMoreStore } from "./TellUsMore/useTellUsMoreStore";
import Submitting from "./Congratulations/Submitting";
import FixedBookingControls from "./FixedBookingControls";
import Image from "next/image";
import { useFixedBookingFormStore } from "../FixedBookingStore";
import { useEffect } from "react";

function Congrutalations() {
  const { isSubmitting, submissionResult } = useTellUsMoreStore();
  const { setActivePage } = useFixedBookingFormStore();

  // useEffect(() => {
  //   return setActivePage(0);
  // }, [setActivePage]);

  return (
    <FramerWrapper {...fadeIn}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 px-5 h-[60vh]">
        <div className="flex flex-col gap-5 items-start justify-center ">
          <p className=" text-primary font-bold text-3xl">Congratulations</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt fringilla
            pellentesque risus erat quisque posuere ullamcorper cursus. Mi
            interdum est sed pharetra..
          </p>
        </div>
        <div className="flex relative w-full aspect-[3/2]">
          <Image
            src={"/congratulations2.png"}
            alt="Congratulations"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      {isSubmitting && <Submitting />}
      <FixedBookingControls
        showBackButton={false}
        showForwardButton={!isSubmitting}
        close={true}
      />
    </FramerWrapper>
  );
}

export default Congrutalations;
