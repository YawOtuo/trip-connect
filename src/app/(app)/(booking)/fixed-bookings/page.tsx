"use client"
import FixedBookingForm from "@/components/FixedBookingForm";
import FramerWrapper from "@/components/FramerWrapper";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { fadeIn } from "@/lib/animations";
import { LuLocateFixed } from "react-icons/lu";
import BookNowButton from "../components/BookNowButton";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";
import BookingsLayout from "../BookingsLayout";
import { useTellUsMoreStore } from "@/components/FixedBookingForm/components/TellUsMore/useTellUsMoreStore";

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

const pillOptions = ["VIP BUSES", "2M EXPRESS", "STC BUSES"];

function Page() {
  // const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
  // useTransportSchedules();
  const { isModalOpen, setIsModalOpen } = useTellUsMoreStore();
  return (
    <BookingsLayout>
      <div className="w-full">
        <div className="text-white  w-full flex flex-col gap-5">
          <div className="flex items-start gap-3 flex-col">
            <LuLocateFixed size={60} />
            <p className="text-3xl lg:text-5xl font-bold">Fixed Booking</p>
          </div>

          <div className="">
            <p>
             Our Fixed Booking Service is designed to make your travel planning effortless and convenient. Here's what you need to know:
              
              What is Fixed Booking?
              Fixed Booking allows you to reserve a seat on one of our scheduled buses. Unlike on-demand services, our buses operate on
              fixed routes and schedules, ensuring you have a reliable and timely travel option.
             
            </p>
          </div>

          <FramerWrapper {...fadeIn} className="flex flex-wrap gap-5">
            {pillOptions?.map((r) => (
              <Pill label={r} key={r} />
            ))}
          </FramerWrapper>

          <div className="w-full flex justify-end mt-5">
            <Modal
              open={isModalOpen}
              onOpenChange={setIsModalOpen}
              size={"5xl"}
              trigger={<BookNowButton />}
              body={
                <div>
                  <FixedBookingForm />
                </div>
              }
              header={<div></div>}
            />
          </div>
        </div>
      </div>
    </BookingsLayout>
  );
}

export default Page;
