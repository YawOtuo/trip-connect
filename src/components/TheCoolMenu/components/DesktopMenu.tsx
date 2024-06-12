import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeInOut } from "@/lib/animations";

import { animate, stagger } from "framer-motion";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";
import MenuLink from "./MenuLink";
import { linksBeforeLogin } from "../content";

export const DesktopMenu = (props: any) => {
  const [active, setActive] = useState<number | null>(null);
  const [subId, setSubId] = useState<number | null>(null);
  const router = useRouter();
  const { setMobileMenuStore, MobileMenuStore } = useMobileNavStore();

  useEffect(() => {
    animate(
      ".main-menu-link",
      MobileMenuStore ? { opacity: [0, 1], x: [-5, 0] } : { opacity: 1, x: 0 },
      {
        delay: stagger(0.1, { startDelay: 0.5 }),
      }
    );
  }, [MobileMenuStore]);

  return (
    <div className={`hidden lg:flex flex-row gap-12 px-8 ${props?.className} `}>

      
      <div
        className={
          "flex w-max flex-col gap-10 border-r-[3px] border-r-white pr-10"
        }>


        {linksBeforeLogin.map(
          (r, idx) =>
            r.name.toLowerCase() !== "more" && (
              <React.Fragment key={idx}>
                <MenuLink
                  active={active === idx}
                  linkObject={r}
                  onClick={() => {
                    // if (r?.sub) {
                    //   setActive(idx);
                    //   setActiveSubLink("");
                    //   setSubId(null);
                    // } else {
                    //   setActiveSubLink("");
                    //   setActive(null);
                    //   router.push(r?.url);
                    // }
                  }}
                />
              </React.Fragment>
            )
        )}

        {/* main links after login */}
      </div>
      {/* sub links before login */}
      {active !== null && (
        <>
          <motion.div
            className={"flex flex-col gap-8"}
            animate={"open"}
            variants={FadeInOut}
            initial={"closed"}
            exit={"closed"}>
            {/* sub links --> view all listings, etc... */}
            {linksBeforeLogin[active]?.sub?.map((l: any, ldx) => (
              <MenuLink
                key={ldx}
                active={ldx === subId}
                linkObject={l}
                isSubLink
                onClick={() => {
                  // setActiveSubLink(l?.label);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
      {/* sub links after login */}
    </div>
  );
};
