import BackAndContinueControls from "./BackAndContinueControls";
import TextInput from "@/components/ui/textinput";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useFlexibleBookingFormStore } from "../useFlexibleBookingFormStore";

function FlexiTellUsMore() {
  const { setStartDate, setEndDate, setPurposeOfOrder } =
    useFlexibleBookingFormStore();
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5 relative px-5 lg:px-10 md:min-h-[90vh] items-center">
      {" "}
      {/* Main container */}
      <div className="flex w-full shrink-0 basis-[40%] flex-col gap-5 md:gap-10 items-start justify-center ">
        <div className="flex items-center justify-center ">
          {" "}
          {/* Added margin-bottom for vertical gap */}
          <IoDocumentTextOutline className="h-6 w-8 text-primary mr-2" />{" "}
          {/* Page/Note icon */}
          <span className="text-primary text-2xl font-semibold">
            Tell Us More
          </span>{" "}
          {/* Text */}
        </div>

        <div className="w-full flex flex-col gap-10 relative">
          {" "}
          {/* Frame with width 636px, vertical gap of 40px, and negative left margin */}
          <div className="flex flex-col space-y-2">
            {" "}
            <TextInput
              required
              type="date"
              label="When will you like to start using the vehicle"
              name="startData"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <TextInput
              required
              type="date"
              label="When will you return the vehicle?"
              name="duration"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <TextInput
              type="text"
              label="What are you usinng the vehicle for? (optional)"
              name="duration"
              onChange={(e) => setPurposeOfOrder(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full gap-5 md:gap-10 w-full md:w-[50%]">
        {" "}
        {/* Positioning the square text box */}
        <div className="w-full border rounded-lg border-[#D9D9D9] flex flex-col">
          {" "}
          {/* Text box with specified height, width, rounded edges, and stroke color */}
          <div className="bg-[#D9D9D94C] h-8 flex items-center px-4 rounded-lg mt-4 ml-3 mr-3">
            {" "}
            {/* Circular rectangle at the top */}
            <IoDocumentTextOutline />
            <span className="text-primary ml-2 font-bold mt-0.5">
              Notice
            </span>{" "}
            {/* Text */}
          </div>
          <div
            className="h-full w-full p-4 rounded-lg"
            style={{ backgroundColor: "transparent" }}>
            <p className="mb-1 ">
              Lorem ipsum dolor sit amet consectetur. Lacus blandit aliquet nibh
              cras. Sed tempus senectus tellus interdum pellentesque amet. Ut
              sem mauris tellus interdum tincidunt mattis ut morbi quam.
              Scelerisque est euismod commodo semper nam risus montes.
            </p>
            <p className="">
              Accumsan luctus convallis ipsum velit mi vestibulum fames
              eleifend. Urna congue urna cras consequat. Tempor aliquam
              adipiscing facilisi tempor arcu suspendisse. Aliquet donec sit
              nibh morbi semper. Tellus tincidunt ullamcorper non adipiscing
              mus.
            </p>
          </div>
        </div>
        <BackAndContinueControls />
      </div>
    </div>
  );
}

export default FlexiTellUsMore;
