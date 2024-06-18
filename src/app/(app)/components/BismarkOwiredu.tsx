import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from Next.js
import FramerWrapper from "@/components/FramerWrapper";
import { fadeUp } from "@/lib/animations";
import { RiImageCircleLine } from "react-icons/ri";

function BismarkOwiredu() {
  return (
    <FramerWrapper
      {...fadeUp}
      className="grid grid-cols-1 lg:grid-cols-2 relative w-full items-center justify-center gap-10 lg:gap-20 ">
      <div className="relative lg:bottom-[-145px] lg:right-[-600px]   bg-white p-6 =shadow-lg border-primary border-4 max-w-[600px] rounded-2xl flex flex-col gap-5 lg:z-40">
      <div className="flex items-center w-fit gap-5">
          <RiImageCircleLine color="#6B184E" size={80}/>
          <h2 className="text-2xl 2xl:text-3xl font-semibold ">
            Flexible Bookings
          </h2>
        </div>
        <p className="text-sm lg:text-base text-slate-600">
          Lorem ipsum dolor sit amet consectetur. Quam lacus purus pharetra
          habitasse. Pulvinar et nunc arcu venenatis sed porttitor sed
          vestibulum. Odio lobortis cras amet est malesuada dictum. Facilisis at
          aliquam a nec semper neque donec massa consectetur. 
        </p>

        <div className="w-full flex justify-end">
          <button className="border-2 border-primary rounded-3xl px-10 py-2 flex items-center justify-center gap-5">
            Book Now
            <FaArrowRight color="#6B184E" />
          </button>
        </div>
      </div>
      <div className="flex justify-center  py-2  w-full px-2">
        <FramerWrapper
          {...fadeUp}
          className="relative w-full aspect-[9/7] md:aspect-[4/2] lg:aspect-[9/7] h-full overflow-hidden rounded-md lg:rounded-xl lg:w-[800px]">
          <Image
            src="/Bismarkway.jpg"
            alt="Buses"
            objectFit="fill"
            fill // Adjust the height as needed
            className="rounded-lg"
          />
        </FramerWrapper>
      </div>
    </FramerWrapper>
  );
}

export default BismarkOwiredu;
