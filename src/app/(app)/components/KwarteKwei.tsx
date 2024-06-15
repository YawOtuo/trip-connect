import FramerWrapper from "@/components/FramerWrapper";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";

function KwarteKwei() {
  return (
    <FramerWrapper
      {...fadeUp}
      className="flex flex-col lg:flex-row gap-20 items-center justify-center mt-16 lg:my-24 ">
      {/* Left side with image */}
      <div className="order-2 lg:order-1 relative w-full basis-[40%] shrink-0 grow-0 aspect-square md:aspect-[4/2] lg:aspect-[5/7] lg:max-h-[700px] overflow-hidden rounded-2xl">
        <Image
          src="/kq1.png" // Replace with the path to your image
          alt="Description of image"
          fill // Set appropriate height
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Right side with text and button */}
      <div className="order-1 lg:order-2  flex flex-col items-start justify-center gap-6 text-left lg:max-w-[50%]">
        <h1 className="text-3xl lg:text-5xl text-primary font-semibold ">
          Discover the ultimate convenience with <span className="font-bold">tripConnect</span>.
        </h1>
        <p className="">
          Whether you need a quick ride across town or planning a long journey,
          our app connects you with reliable transport options in just a few
          taps. Enjoy real-time tracking, secure payments, and 24/7 customer
          support. Travel smarter and stress-free with our user-friendly
          platform.
        </p>
        <div className="">
          <button className="px-6 py-3 bg-primary text-white rounded-3xl hover:scale-[1.02] transition-all duration-500">
            Learn More
          </button>
        </div>
      </div>
    </FramerWrapper>
  );
}

export default KwarteKwei;
