import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import Image from "next/image";

function StartHere() {
  return (
    <FramerWrapper {...fadeIn} className="h-full">
      <div className="h-full flex flex-col justify-center items-start border p-4 rounded-lg shadow-lg h-200">
        <p className="mb-4  text-2xl lg:text-5xl text-primary font-bold">
          Select a bus
        </p>
        <div className="flex space-x-4 w-full">
          <div className="relative w-1/3 h-40">
            <Image
              src="/buses1.jpg"
              alt="Bus 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-1/3 h-40">
            <Image
              src="/buses1.jpg"
              alt="Bus 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-1/3 h-40">
            <Image
              src="/buses1.jpg"
              alt="Bus 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </FramerWrapper>
  );
}

export default StartHere;
