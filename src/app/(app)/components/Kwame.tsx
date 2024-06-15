import FramerWrapper from "@/components/FramerWrapper";
import "../../globals.css"; // Import the global CSS file for styling
import Image from "next/image"; // Import the Image component from Next.js
import { fadeInRight } from "@/lib/animations";

const Pill = ({ label }: { label: string }) => {
  return (
    <button className="relative group border border-primary text-primary py-1 px-4 rounded-full overflow-hidden">
      <span className="relative z-10 group-hover:text-white transition-all duration-500">
        {label}
      </span>
      <div className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
    </button>
  );
};
function Kwame() {
  const pillOptions = [
    "VIP BUSES",
    "2M EXPRESS",
    "SALOON VEHICLES",
    "MOTORCYCLES",
  ];
  return (
    // Main container with flexbox to center its content
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 lg:px-10">
      {/* Image container */}
      <FramerWrapper
        {...fadeInRight}
        className="order-2 lg:order-1 w-full flex-shrink-0 lg:basis-[50%] h-full">
        <div className="relative w-full aspect-[9/7] h-full ">
          <Image
            src="/buses1.jpg"
            alt="Buses"
            fill // Adjust the height as needed
            className="rounded-lg"
          />
        </div>
      </FramerWrapper>

      {/* Container for the text content and buttons */}
      <div className="order-1 lg:order-2 flex flex-col gap-5 lg:gap-8">
        {/* Text content */}
        <div className="text-left  flex flex-col gap-4">
          <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
            Choose Your <br />
            Perfect Travel Mode
          </h1>
          <h3 className="text-black">
            Travel the way you want with a variety of transport options to
            <br className="hidden lg:block" />
            suit your needs. Whether you&apos;re looking for convenience,
            <br className="hidden lg:block" />
            speed or affordability, we&apos;ve got you covered.
          </h3>
        </div>

        {/* Container for the buttons arranged in a grid with 3 columns */}
        <div className="flex items-center flex-wrap gap-2 lg:gap-4 lg:w-[90%]">
          {/* Button component with hover effect */}

          {/* Repeat the button component for additional buttons */}
          {pillOptions?.map((r) => (
            <Pill label={r} key={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kwame; // Export the component as default
