import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";

function SelectASeat() {
  return (
    <FramerWrapper {...fadeIn} className=" px-5 py-5">
      <div className="flex gap-4 flex-col">
        <p className="text-2xl font-semibold text-primary">Select a Seat</p>

        <div className="border-4 border-primary rounded-2xl h-[50vh] flex gap-5 items-center px-2 py-3">


          <div className="bg-primary w-[50px] rounded-l-lg rounded- h-full">

          </div>
        </div>
      </div>
    </FramerWrapper>
  );
}

export default SelectASeat;
