import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

function Enam() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative w-full items-center justify-center gap-10 lg:gap-[150px]">

      <div className="flex flex-col gap-3  lg:px-14">
        <h1 className="text-primary font-semibold text-3xl lg:text-5xl">
          Lorem <br /> ipsum dolor sit amet consectetur.
        </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur. Etiam ullamcorper sed id
          pharetra felis lacus at. Malesuada in. Id maecenas neque diam suscipit
        </p>

        <button className="bg-primary w-[200px] h-[52px] text-white font-semibold text-lg rounded-3xl mt-5 lg:mt-10 animate-pulse flex flex-row justify-center items-center gap-5">
          Book Me
          <FaArrowRight color="white" />
        </button>
      </div>
      <div className="flex justify-center lg:border-solid lg:border-[4px] border-primary py-2 rounded-3xl w-full px-2">
        <div className="relative w-full aspect-[9/8] h-full overflow-hidden rounded-md lg:rounded-2xl">
          <Image
            src="/myimage.jpeg"
            alt="Buses"
            objectFit="cover"
            fill // Adjust the height as needed
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Enam;
