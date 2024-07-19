import TextInput from "@/components/ui/textinput";
import BackAndContinueControls from "./BackAndContinueControls";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { useAppStore } from "@/lib/store/useAppStore";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";
import { User } from "@/lib/types/user";
import { useEffect } from "react";

function CompleteYourDetails() {
  const { DBDetails } = useAppStore();
  const { setUser, user } = useFlexibleBookingFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Dynamically update user field based on input name
    }));
  };

  useEffect(() => {
    if (DBDetails) {
      setUser(DBDetails);
    }
  }, [DBDetails, setUser]);

  return (
    <div className="flex flex-col h-screen gap-5 md:gap-20 px-5 md:px-20 p-10">
      <div className="">
        <p className="text-2xl md:text-5xl text-primary font-bold">
          Complete Your Details{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  justify-between w-full  mb-10 ">
        <div className="flex flex-col w-full md:w-[60%]  rounded-lg gap-5 md:gap-14">
          <TextInput
            name="username"
            type="text"
            placeholder="First Name"
            label="First Name"
            value={DBDetails?.username}
            onChange={handleChange}
          />

          <TextInput
            name="date_of_birth"
            type="date"
            placeholder="Enter your Date of Birth"
            label="Date of Birth"
            value={DBDetails?.date_of_birth}
            onChange={handleChange}
          />
          <TextInput
            name="email"
            type="email"
            placeholder="Enter Your email address"
            label="Email"
            value={DBDetails?.email}
            onChange={handleChange}
          />
          <TextInput
            name="phone_number"
            type="number"
            placeholder="Enter Your Phone Number"
            label="Phone Number"
            value={DBDetails?.phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-5 w-full md:w-[60%] md:gap-14">
          <TextInput
            name="country_of_origin"
            type="text"
            placeholder="Country of Origin"
            label="Country of Origin"
            value={DBDetails?.country_of_origin}
            onChange={handleChange}
          />
          <TextInput
            name="contact_address"
            type="text"
            placeholder="Enter your Contact Address"
            label="Contact Address"
            value={DBDetails?.contact_address}
            onChange={handleChange}
          />
          <TextInput
            name="drivers_license_number"
            type="text"
            placeholder="Enter Your Drivers License Number"
            label="Drivers License Number"
            value={DBDetails?.drivers_license_number}
            onChange={handleChange}
          />
          <TextInput
            name="ghana_card_number"
            type="text"
            placeholder="Enter Your Ghana Card"
            label="Ghana Card"
            value={DBDetails?.ghana_card_number}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className=" w-full md:w-[30%] pb-10">
          <BackAndContinueControls
            showForwardButton={Boolean(
              user?.username &&
                user?.contact_address &&
                user?.country_of_origin &&
                user?.date_of_birth &&
                user?.drivers_license_number &&
                user?.email &&
                user?.email &&
                user?.ghana_card_number &&
                user?.phone_number
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default CompleteYourDetails;
