"use client";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center bg-primary-100">
        <div
          className={` ${
            pathname == "/flexible-booking"
              ? "bg-[url('/flexible1.jpg')]"
              : "bg-[url('/fixed1.png')]"
          }  bg-no-repeat bg-cover h-[30vh] lg:h-fit lg:min-h-[90vh] bg-center w-full lg:w-[40%]`}></div>

        <div className="w-full lg:w-[60%] px-5 lg:px-16 py-10 lg:py-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
