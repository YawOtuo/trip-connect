import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    url: "/dashboard",
    icon: <IoHomeOutline />,
  },
  {
    name: "My Trips",
    url: "/dashboard/trips",
    icon: <FaBusSimple />,
  },
  {
    name: "My Vehicles",
    url: "/dashboard/vehicles",
    icon: <FaCar />,
  },
  {
    name: "Notifications",
    url: "/dashboard/notifications",
    icon: <IoMdHeartEmpty />,
  },
  {
    name: "Account Details",
    url: "/dashboard/account",
    icon: <RiAlignItemBottomLine />,
  },
  {
    name: "Back",
    url: "/",
    icon: <MdOutlineAccountCircle />,
  },
  // {
  //   name: "Logout",
  //   url: "/dashboard",
  //   icon: <IoHomeOutline />,
  // },
];
