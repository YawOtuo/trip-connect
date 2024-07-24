import { useFlexibleBookingFormStore } from "@/components/FlexibleBookingForm/useFlexibleBookingFormStore";
import { BsPencil, BsPersonFill } from "react-icons/bs";

function UserDetailsSummary() {
  const { selectedVehicle, startDate, endDate, purposeOfOrder, user } =
    useFlexibleBookingFormStore();

  return (
    <div>
      <div className="border-[2px] rounded-md w-full   p-5">
        <div className="flex px-0 py-5 text-primary">
          <BsPersonFill className="text-[30px]" />
          <h1 className="px-4 font-bold text-[22px]">My Details</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-8">
            <h1 className="font-light flex">
              Name: <div className="font-bold px-5">{user?.username}</div>
            </h1>
            <h1 className="font-light flex">
              Phone: <div className="font-bold px-5">{user?.phone_number}</div>
            </h1>
            <h1 className="font-light flex">
              Contact Address:{" "}
              <div className="font-bold px-5">{user?.contact_address}</div>
            </h1>
            <h1 className="font-light flex">
              Country Of Origin:{" "}
              <div className="font-bold px-5">{user?.country_of_origin}</div>
            </h1>
            <h1 className="font-light flex">
              Date Of Birth:{" "}
              <div className="font-bold px-5">{user?.date_of_birth}</div>
            </h1>
          </div>
          <div className="px-8">
            <h1 className="font-light flex">
              Drivers License Number:{" "}
              <div className="font-bold px-5">
                {user?.drivers_license_number}
              </div>
            </h1>
            <h1 className="font-light flex">
              Email: <div className="font-bold px-5">{user?.email}</div>
            </h1>
            <h1 className="font-light flex">
              Ghana Card:{" "}
              <div className="font-bold px-5">{user?.ghana_card_number}</div>
            </h1>
            {/* <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">{user?.}</div>
            </h1>
            <h1 className="font-light flex">
              Lorem: <div className="font-bold px-5">Lorem Ipsum</div>
            </h1> */}
          </div>
      
        </div>
        {/* <div className="flex font-bold px-[10px] justify-end">
          <BsPencil />

          <h1 className="px-3">Change</h1>
        </div> */}
      </div>
    </div>
  );
}

export default UserDetailsSummary;
