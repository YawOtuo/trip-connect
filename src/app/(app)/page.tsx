import Image from "next/image";
import HeroSection from "./components/HeroSection";
import QuarteiKwei from "./components/KwarteKwei";
import Julius from "./components/Julius";
import Kwame from "./components/Kwame";
import Jesse from "./components/Jesse";
import BismarkOwiredu from "./components/BismarkOwiredu";
import BismarkAgyei from "./components/BismarkAgyei";
import Enam from "./components/Enam";
import Navbar from "@/components/Navbar";
import FramerWrapper from "@/components/FramerWrapper";
import { SlideInFromLeft, fadeInLeft, fadeUp } from "@/lib/animations";
import ScheduleARideToday from "./components/ScheduleARideToday";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center">
      <Navbar />
      <HeroSection />
      <div className="flex flex-col gap-10 px-5 items-center lg:w-[90%]">
        <QuarteiKwei />
        <Julius />
        <FramerWrapper {...fadeUp} className="w-full lg:mt-14 ">
          <Kwame />
        </FramerWrapper>{" "}
      </div>
      <FramerWrapper {...fadeUp}>
        <ScheduleARideToday />
      </FramerWrapper>
      <div className="flex flex-col gap-10 px-5 items-center lg:w-[90%]">
        <Enam />
      </div>
      <div className="mt-5">
        <BismarkAgyei />
      </div>{" "}
    </main>
  );
}
