"use client";
import Link from "next/link";

import { useDashboardStore } from "@/lib/store/useDashboardStore";
import { useDashboardMobileStore } from "./DashboardMobileNavbar/components/useDashboardMobileNavStore";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "./dashboardLinks";

function DashboardSideMenu() {
  const { activeTab, setActiveTab } = useDashboardStore();
  const { setDashboardMobileMenu } = useDashboardMobileStore();

  return (
    <div className="fixed z-10 lg:sticky top-2 right-5">
      <div className="w-full flex justify-end  lg:hidden items-center ">
        <button onClick={() => setDashboardMobileMenu(true)}>
          <GiHamburgerMenu size={30} className="text-primary" />
        </button>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-col gap-4 min-h-screen  sticky top-0 py-10 transition-all px-3">
          <div>
            <p className="text-white text-2xl font-bold">tripConnect</p>
          </div>

          {links?.map((r) => (
            <Link
              onClick={() => setActiveTab(r?.name)}
              className={` transition-all  ease-in border-[2px] rounded-md px-7 duration-[250ms]  py-2 flex items-center gap-3
              ${
                activeTab == r?.name
                  ? "bg-white border-white"
                  : "border-primary-100 text-white hover:border-white"
              }
              `}
              href={r?.url}
              key={r?.name}>
              {r?.icon}
              {r.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardSideMenu;
