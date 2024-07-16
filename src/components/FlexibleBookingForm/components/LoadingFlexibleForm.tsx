import { useEffect } from "react";
import BackAndContinueControls from "./BackAndContinueControls";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";

function LoadingFlexibleForm() {
  useEffect(() => {}, []);
  return (
    <FramerWrapper
      {...fadeIn}
      className="bg-primary-100 h-[100dvh] flex flex-col gap-5 justify-center items-center">
      <Link href={"/flexible-booking"}>
        <p className="text-2xl text-white font-bold">Loading....</p>
      </Link>{" "}
      <div className="w-full max-w-[30%]">
        <BackAndContinueControls />
      </div>{" "}
    </FramerWrapper>
  );
}

export default LoadingFlexibleForm;
