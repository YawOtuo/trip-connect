import Link from "next/link";
import { useMobileNavStore } from "@/lib/store/useMobileNavStore";

export const MobileMenu = (props: any) => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Login",
      url: "/login",
    },
    {
      name: "flexible bookings",
      url: "/flexible-bookings",
    },
    {
      name: "fixed bookings",
      url: "/fixed-bookings",
    },
    {
      name: "dashboard",
      url: "/dashboard",
    },

    // {
    //   name: "lorem",
    //   url: "/lorem",
    // },
  ];
  // const { setToggle } = useMenuStore();
  const { setMobileMenuStore } = useMobileNavStore();

  return (
    <div className={`lg:hidden flex flex-col justify-center h-[55vh] gap-10 px-5  ${props?.className}`}>
      {/* <Link href={"/fixed-bookings"}>
        {" "}
        <button
          className="w-fit text-xl font-bold px-8 bg-primary py-2 text-white rounded-sm border-primary border-2">
          Book a ride
        </button>
      </Link> */}

      <div className="flex flex-col gap-2">
        {links?.map((link: any, index: number) => (
          <Link
            href={`${link.url}`}
            key={index}
            className=""
            onClick={() => setMobileMenuStore(false)}>
            <p className={"text-lg !font-semibold capitalize text-[#fff]"}>
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
