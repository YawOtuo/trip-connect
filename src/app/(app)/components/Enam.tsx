import FramerWrapper from "@/components/FramerWrapper";
import ImageSlider from "@/components/ImageSlider";
import { fadeInLeft, fadeUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function Enam() {
  return (
    <FramerWrapper
      {...fadeUp}
      className="grid grid-cols-1 lg:grid-cols-2 relative w-full items-center justify-center gap-10 lg:gap-20 ">
      <div className="flex flex-col gap-3">
        <h1 className="text-primary font-semibold text-3xl lg:text-5xl">
          <br /> Welcome to Our Car Booking Service.
        </h1>
        <p>
          Experience the ease and convenience of booking your next ride with us
          Enjoy reliable service, competitive rates, and a seamless travel
          experience with us.
        </p>

        <Link href={"/flexible-bookings"}>
          <button className="bg-primary w-[200px] h-[52px] text-white font-semibold text-lg rounded-3xl mt-5 lg:mt-10 animate-pulse flex flex-row justify-center items-center gap-5">
            Book Me
            <FaArrowRight color="white" />
          </button>
        </Link>
      </div>
      <div className="flex justify-center  py-2  w-full px-2">
        <FramerWrapper
          {...fadeUp}
          className="relative w-full aspect-[9/7] md:aspect-[4/2] lg:aspect-[9/7] h-full overflow-hidden rounded-md lg:rounded-xl">
          <ImageSlider
            delay={2000}
            effect="cards"
            images={["/enam3.png", "/herosection/1.png"]}
            className="w-full aspect-[9/7] md:aspect-[4/2] lg:aspect-[9/7] h-full "
          />
        </FramerWrapper>
      </div>
    </FramerWrapper>
  );
}

export default Enam;
