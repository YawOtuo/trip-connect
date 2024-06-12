"use client";
import React from "react";
import MobileNavBar from "./TheCoolMenu";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";

type Props = {
  children: React.ReactNode;
};

const NavMenuWrapper = ({ children }: Props) => {
  const { MobileMenuStore } = useMobileNavStore();
  return (
    <>
      <MobileNavBar isOpen={MobileMenuStore} layout />
      {children}
    </>
  );
};

export default NavMenuWrapper;
