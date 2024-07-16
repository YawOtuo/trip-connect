import CompleteYourDetails from "./components/CompleteYourDetails";
import FlexiCongratulations from "./components/FlexiCongratulations";
import FlexiTellUsMore from "./components/FlexiTellUsMore";
import GreatProgress from "./components/GreaatProgress";
import LoadingFlexibleForm from "./components/LoadingFlexibleForm";
import SelectVehicles from "./components/SelectVehicles";

export const pages: any = [
  {
    name: "start-here",
    label: "start-here",
    component: <LoadingFlexibleForm />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <SelectVehicles />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <FlexiTellUsMore />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <GreatProgress />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <CompleteYourDetails />,
    number: 1,
  },
  {
    name: "bus-results",
    label: "bus-results",
    component: <FlexiCongratulations />,
    number: 1,
  },
];
