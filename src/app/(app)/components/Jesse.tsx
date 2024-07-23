import Image from "next/image";
import "../../globals.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiImageCircleLine } from "react-icons/ri";


function Jesse() {
  const width = 1000;
  const height = 2000;
  return (
    <div className="my-24 w-full relative flex flex-col lg:flex-row lg:items-end justify-start ">
      {/* Image Container */}
      <div className="hidden lg:block relative lg:w-[50vw] min-h-[500px] aspect-[3/2]">
        <Image
          src="/jesse2.png"
          alt="Example"
          className="w-full h-full object-cover rounded-lg shadow-lg"
          width={width}
          height={height}
        />
      </div>

      {/* Card Container */}
      <div className="relative lg:bottom-0 lg:right-[200px]   bg-white px-6 py-3 shadow-lg border-primary border-4 min-w-[400px] max-w-[500px] rounded-2xl flex flex-col gap-2 2xl:gap-5">
        <div className="flex items-center w-fit gap-5">
          <RiImageCircleLine color="#6B184E" size={40}/>
          <h2 className="text-xl 2xl:text-3xl font-semibold ">
            Flexible Bookings
          </h2>
        </div>
        <p className="text-sm 2xl:text-base text-slate-600">
            Our Flexible Booking service offers you the freedom to rent a vehicle whenever you need it. 
          Whether it's for a quick errand, a weekend getaway, or an extended trip, our service provides the flexibility to choose the vehicle that best suits your needs. 
          Enjoy the convenience of booking a car at any time, on any day, tailored to fit your schedule.

        </p>

        <div className="w-full flex justify-end">
          <button className="border-2 border-primary rounded-3xl px-10 py-2 flex items-center justify-center gap-5">
            Book Now
            <FaArrowRight color="#6B184E" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jesse;
