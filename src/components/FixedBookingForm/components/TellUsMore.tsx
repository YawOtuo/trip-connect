import FramerWrapper from "@/components/FramerWrapper";
import CustomSelect from "@/components/ui/select";
import TextInput from "@/components/ui/textinput";
import { fadeIn } from "@/lib/animations";

function TellUsMore() {
  return (
    <FramerWrapper {...fadeIn}>
     <div  className="">
        <p className="text-2xl text-primary font-semibold">Tell Us More</p>
        <div className="grid grid-cols-2 gap-10 py-10">
          <div className="w-full flex flex-col gap-5">
            {/* <CustomSelect label="Where are you travelling from?" /> */}
            {/* <CustomSelect label="Where are you travelling to?" /> */}
            {/* <CustomSelect label="What time will you be travelling?" /> */}
          </div>
          <div>
            <TextInput name="number_of_people" type="number" labelClassName="text-base font-normal" label="How many people are with you?"/>
          </div>
        </div>
     </div>
    </FramerWrapper>
  );
}

export default TellUsMore;
