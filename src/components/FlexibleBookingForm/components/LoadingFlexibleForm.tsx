import { useEffect } from "react";
import BackAndContinueControls from "./BackAndContinueControls";
import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";

function LoadingFlexibleForm() {
  useEffect(() => {}, []);
  return (
    <FramerWrapper
      {...fadeIn}
      className="bg-primary-100 h-[100dvh] flex flex-col justify-center items-center">
      <p className="text-2xl text-white font-bold">Loading....</p>
      <div className="w-full max-w-[30%]">
        <BackAndContinueControls />
      </div>{" "}
    </FramerWrapper>
  );
}

export default LoadingFlexibleForm;
