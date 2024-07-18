import BusDetails from "./components/BusDetails";
import BusResults from "./components/BusResults";
import Confirm from "./components/Confirm";
import Congrutalations from "./components/Congratulations";
import Searching from "./components/Searching";
import SelectASeat from "./components/SelectASeat";
import StartHere from "./components/StartHere";
import TellUsMore from "./components/TellUsMore";

export const pages: any = [
  // {
  //   name: "start-here",
  //   label: "start-here",
  //   component: <StartHere />,
  //   number: 1,
  // },
  {
    name: "start-here",
    label: "start-here",
    component: <TellUsMore />,
    number: 1,
  },

  {
    name: "bus-results",
    label: "bus-results",
    component: <BusResults />,
    number: 3,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <BusDetails />,
    number: 4,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <SelectASeat />,
    number: 5,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <Confirm />,
    number: 5,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <Congrutalations />,
    number: 6,
  },
];
