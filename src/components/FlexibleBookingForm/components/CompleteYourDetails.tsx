import TextInput from "@/components/ui/textinput";
import BackAndContinueControls from "./BackAndContinueControls";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";

function CompleteYourDetails() {
  return (
    <div className="flex flex-col h-screen gap-5 md:gap-20 px-5 md:px-20 p-10">
      <div className="">
        <p className="text-2xl md:text-5xl text-primary font-bold">Complete Your Details </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10  justify-between w-full  mb-10 ">
        <div className="flex flex-col  rounded-lg gap-5 md:gap-14">
          <TextInput
            name="First Name"
            type="text"
            placeholder="First Name"
            label="First Name"
          />
          <TextInput
            name="Last Name"
            type="text"
            placeholder="Last Name"
            label="Last Name"
          />
          <TextInput
            name="Date of Birth"
            type="date"
            placeholder="Enter your Date of Birth"
            label="Date of Birth"
          />
            <TextInput
            name="Email"
            type="email"
            placeholder="Enter Your email address"
            label="Email"
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-14">
        
          <TextInput
            name="Phone Number"
            type="number"
            placeholder="Enter Your Phone Number"
            label="Phone Number"
          />
          <TextInput
            name="Country of Origin"
            type="text"
            placeholder="Country of Origin"
            label="Country of Origin"
          />
          <TextInput
            name="Contact Address"
            type="text"
            placeholder="Enter your Date of Birth"
            label="Contact Address"
          />
          <TextInput
            name="Location"
            type="text"
            placeholder="Where Are you traveling from?"
            label="Location"
          />
        </div>
        <div className="flex flex-col gap-5 md:gap-14">
          <TextInput
            name="Drivers License Number"
            type="number"
            placeholder="Enter Your Drivers License Number"
            label="Drivers License Number"
          />
          <TextInput
            name="Ghana Card"
            type="number"
            placeholder="Enter Your Ghana Card"
            label="Ghana Card"
          />
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className=" w-[30%] ">
          <BackAndContinueControls />
        </div>
      </div>
    </div>
  );
}

export default CompleteYourDetails;
