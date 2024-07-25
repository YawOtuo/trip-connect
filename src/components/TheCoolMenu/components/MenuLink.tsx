import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import CaArrowRight from "./icons/CaArrowRight";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";

type Props = {
  active: boolean;
  linkObject: any; // TODO: get the correct type of linkObject
  onClick: () => void;
  isSubLink?: boolean;
};

const MenuLink = (props: Props) => {
  const { setMobileMenuStore } = useMobileNavStore();
  // const { activeSubLink } = useMobileNavStore();


  return (
    <motion.button
      onClick={props.onClick}
      className={`main-menu-link transition-all hover:scale-105 ${
        props.isSubLink && "capitalize"
      }`}
    >
      <div
        className={`w-full cursor-pointer whitespace-nowrap text-white ${
          props.active ? "text-accent-100" : "text-white"
        }`}
      >
        {(props.isSubLink && props.linkObject.id) || props.linkObject?.sub ? (
          <div className={`w-full flex items-center`}>
            {props.isSubLink ? (
              // <Link href={props.linkObject?.url}>
                <h4 className={`mr-10 `}>{props.linkObject?.name}</h4>
              // </Link>
            ) : (
              <h2 className="mr-10">{props.linkObject?.name}</h2>
            )}
          <CaArrowRight />
          </div>
        ) : (
          <Link
            href={props.linkObject?.url}
            className={`flex ${
              props.isSubLink
                ? "text-2xl font-normal"
                : " text-2xl "
            }`}
            onClick={() => setMobileMenuStore(false)}
          >
            {props.linkObject?.name}
          </Link>
        )}
      </div>
    </motion.button>
  );
};

export default MenuLink;
