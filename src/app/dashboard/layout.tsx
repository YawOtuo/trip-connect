"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import DashboardSideMenu from "./components/DashboardSideMenu";
import { useDashboardMobileStore } from "./components/DashboardMobileNavbar/components/useDashboardMobileNavStore";
import DashboardMobileMenuWrapper from "./components/DashboardMobileNavbar/DashboardMobileMenuWrapper";
import useIsLoggedInReRoute from "@/lib/hooks/useIsLoggedInReRoute";

function Layout({ children }: { children: React.ReactNode }) {
  useIsLoggedInReRoute(false, '/login')
  return (
    <DashboardMobileMenuWrapper>
      <div className="grid grid-cols-5 bg-primary-100">
        <div className=" col-span-5 lg:col-span-1  flex-col gap-5">
          <DashboardSideMenu />
        </div>

        <div className="col-span-5 lg:col-span-4 bg-white rounded-tl-3xl px-5 lg:px-10  py-10">
          {children}
        </div>
      </div>
    </DashboardMobileMenuWrapper>
  );
}

export default Layout;
