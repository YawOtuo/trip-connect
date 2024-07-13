import CompleteYourDetails from "./components/CompleteYourDetails";
import FlexiCongratulations from "./components/FlexiCongratulations";
import FlexiTellUsMore from "./components/FlexiTellUsMore";
import GreatProgress from "./components/GreaatProgress";

export const pages: any = [
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
