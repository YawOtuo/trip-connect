//@ts-nocheck
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMobileNavStore } from "./useMobileNavStore";
import MobileMenuArea from "./components/MenuArea";
import { ExpandCircle } from "@/lib/animations";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";
import MenuArea from "./components/MenuArea";

export default function MobileNavBar(props: any) {
  // const [hide, setHide] = useState(false);
  // const [windowLimit, setWindowLimit] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  // const isInViewport = useIsElementInViewport(bottomLinksRef, menuRef);
  // const { user } = useAppStore();

  return (
    <motion.aside
      ref={menuRef}
      tabIndex="0"
      className="hidden-scrollbar fixed top-0 z-[9999] min-h-dvh w-full gap-20 overflow-y-scroll pb-20 lg:pb-0 inset-0 bg-[#43042D]"
      variants={ExpandCircle}
      exit={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
          opacity: 0,
        },
      }}
      animate={
        props?.isOpen
          ? {
              ...ExpandCircle.open(),
              opacity: 1,
            }
          : {
              ...ExpandCircle.closed,
              transitionEnd: {
                // display: 'none',
                opacity: 0,
              },
            }
      }
      initial={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
          opacity: 0,
        },
      }}>
<div className="mt-10">
        <MenuArea />
  
</div>    </motion.aside>
  );
}
