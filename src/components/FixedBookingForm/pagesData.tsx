import BusDetails from "./components/BusDetails";
import Congrutalations from "./components/Congratulations";
import Searching from "./components/Searching";
import SelectASeat from "./components/SelectASeat";
import StartHere from "./components/StartHere";
import TellUsMore from "./components/TellUsMore";

export const pages: any = [
  {
    name: "start-here",
    label: "start-here",
    component: <StartHere />,
    number: 1,
  },
//   {
//     name: "start-here",
//     label: "start-here",
//     component: <TellUsMore />,
//     number: 1,
//   },
  {
    name: "start-here",
    label: "start-here",
    component: <Searching />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <BusDetails />,
    number: 1,
  },
//   {
//     name: "start-here",
//     label: "start-here",
//     component: <SelectASeat />,
//     number: 1,
//   },
  {
    name: "start-here",
    label: "start-here",
    component: <Congrutalations />,
    number: 1,
  },
];
