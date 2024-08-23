import { useMobileNavStore } from "@/lib/store/useMobileNavStore";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

const MenuArea = (props: any) => {
  const { setMobileMenuStore } = useMobileNavStore();
  0;
  return (
    <div className={"flex flex-col pt-10 lg:pt-8"}>
      <div className="flex flex-col lg:gap-14">
        <div className={"flex-flex-col px-8"}>
          <div
            className={
              "flex w-full flex-row items-center justify-between  pr-10"
            }>
            <div
              className="relative 
          ">
              <p className="text-3xl font-bold text-white">tripConnect</p>
            </div>
            <button className="">
              <AiFillCloseCircle
                onClick={() => setMobileMenuStore(false)}
                color="white"
                size={30}
              />
            </button>
          </div>
        </div>
        <div className={""}>
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

export default MenuArea;
