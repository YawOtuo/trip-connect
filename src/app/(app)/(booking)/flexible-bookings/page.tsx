import FixedBookingForm from "@/components/FixedBookingForm";
import FramerWrapper from "@/components/FramerWrapper";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { fadeIn } from "@/lib/animations";
import { GiFlexibleStar } from "react-icons/gi";
import { LuLocateFixed } from "react-icons/lu";
import BookNowButton from "../components/BookNowButton";
import FlexibleBookingForm from "@/components/FlexibleBookingForm";

const Pill = ({ label }: { label: string }) => {
  return (
    <button
      className="relative group border-2 border-white 
    hover:border-primary transition-all duration-700 text-white py-1 px-4 rounded-full overflow-hidden">
      <span className="relative z-10 group-hover:text-white transition-all duration-500 ">
        {label}
      </span>
      <div className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
    </button>
  );
};

const pillOptions = ["LUXURY VEHICLES", "LOREM", "LOREM"];

function Page() {
  return (
    <div className="w-full">
      <div className="text-white  w-full  flex flex-col gap-5">
        <div className="flex items-start gap-3 flex-col">
          <GiFlexibleStar size={60} />
          <p className="text-3xl lg:text-5xl font-bold">Flexible Booking</p>
        </div>

        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam ipsum nisl fermentum
            nibh sit pellentesque. Ut proin pulvinar eget nulla. Posuere mi
            commodo fusce nunc posuere justo lorem nullam. Ac condimentum neque
            consequat curabitur. Egestas ullamcorper malesuada in habitasse in
            urna sit. Dui proin sodales ac duis sit pellentesque nullam proin
            nibh. Maecenas tristique sit id cursus ornare et lobortis leo
            sollicitudin. Euismod tristique urna etiam nullam lorem in mauris
            arcu vel. Pellentesque et euismod eget velit sagittis iaculis.
          </p>
        </div>

        <FramerWrapper {...fadeIn} className="flex flex-wrap gap-5">
          {pillOptions?.map((r) => (
            <Pill label={r} key={r} />
          ))}
        </FramerWrapper>

        <div className="w-full flex justify-end mt-5">
          <Modal
            size={"5xl"}
            trigger={<BookNowButton />}
            body={<div> <FlexibleBookingForm /> </div>}
            header={<div></div>}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
