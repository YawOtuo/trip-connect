import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import useTransportSchedules from "@/lib/hooks/useTransportSchedules";

function StartHere() {
  const { schedulesFromAndTo, isSchedulesFromAndToLoading } =
    useTransportSchedules();
  return <FramerWrapper {...fadeIn}>Start here ( Jesse)</FramerWrapper>;
}

export default StartHere;
