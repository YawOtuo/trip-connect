import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component from Next.js
import FramerWrapper from "@/components/FramerWrapper";
import { fadeUp } from "@/lib/animations";
import { RiImageCircleLine } from "react-icons/ri";

function BismarkOwiredu() {
  return (
    <FramerWrapper
      {...fadeUp}
      className="px-10 grid grid-cols-1 lg:grid-cols-2 relative w-full items-end justify-center gap-10 lg:gap-20 ">
        
      <div className="relative  lg:left-[280px]   bg-white px-6 py-3 shadow-lg border-primary border-4  max-w-[500px] rounded-2xl flex flex-col gap-2 2xl:gap-5 lg:z-40">

        <div className="flex items-center w-fit gap-5">
          <RiImageCircleLine color="#6B184E" size={40} />
          <h2 className="text-xl 2xl:text-3xl font-semibold ">
            Fixed Bookings
          </h2>
        </div>
        <p className="text-sm 2xl:text-base text-slate-600">
           Our Fixed Booking service offers a reliable and convenient way to travel with scheduled bus routes. 
          Choose from a variety of pre-determined departure times and routes that best fit your itinerary. 
          With fixed bookings, you can plan your day with confidence, knowing exactly when and where your bus will arrive and depart.
          Enjoy the peace of mind that comes with structured travel plans, competitive fares, and a seamless booking process. 
          Travel smarter with our Fixed Booking service.

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
          className="hidden lg:block relative lg:w-[50vw] min-h-[500px] aspect-[3/2]">
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
