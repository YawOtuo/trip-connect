import { useFlexibleBookingFormStore } from "@/components/FlexibleBookingForm/useFlexibleBookingFormStore";
import { BsListTask } from "react-icons/bs";

function OrderDetailsSummary() {
  const { selectedVehicle, startDate, endDate, purposeOfOrder, user } =
    useFlexibleBookingFormStore();

  return (
    <div>
      <div className="border-[2px] rounded-md w-full p-5">
        <div className="flex px-0  text-primary items-center">
          <BsListTask className="text-2xl" />
          <h1 className="px-4 font-bold text-lg">Order Details</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <h1 className="font-light flex">
              Start Date: <div className="font-bold px-5">{startDate}</div>
            </h1>
            <h1 className="font-light flex">
              End Date: <div className="font-bold px-5">{endDate}</div>
            </h1>
            <h1 className="font-light flex">
              Purpose: <div className="font-bold px-5">{purposeOfOrder}</div>
            </h1>
          </div>
          {/* <div className="">
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
          </div> */}
          {/* <div className="">
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1>
          </div> */}
        </div>

        {/* <div className="flex font-bold px-[10px] justify-end">
          <BsPencil />

          <h1 className="px-3">Change</h1>
        </div> */}
      </div>
    </div>
  );
}

export default OrderDetailsSummary;
