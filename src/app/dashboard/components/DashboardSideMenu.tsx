"use client"
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useDashboardStore } from "@/lib/store/useDashboardStore";

const links = [
  {
    name: "Home",
    url: "/dashboard",
    icon: <IoHomeOutline />,
  },
  {
    name: "My Trips",
    url: "/dashboard/trips",
    icon: <IoCartOutline />,
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
function DashboardSideMenu() {
  const { activeTab, setActiveTab } = useDashboardStore();
  return (
    <div>
      <div className="flex flex-col gap-4 min-h-screen  sticky top-0 py-10 transition-all px-3">

        <div>
          <p className="text-white text-2xl font-bold">tripConnect</p>
        </div>

        {links?.map((r) => (
          <Link
            onClick={() => (
              setActiveTab(r?.name)
            )}

            className={` transition-all  ease-in border-[1px] rounded-md px-7 duration-[250ms]  py-2 flex items-center gap-3
            ${activeTab==r?.name ?  "bg-white border-white" :"border-primary-100 text-white hover:border-white"}
            `}
            href={r?.url}
            key={r?.name}>
            {r?.icon}
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardSideMenu;
