"use client"
import NavMenuWrapper from "@/components/NavMenuWrapper";
import Navbar from "@/components/Navbar";
import useIsLoggedInReRoute from "@/lib/hooks/useIsLoggedInReRoute";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useIsLoggedInReRoute(true, '/dashboard')
  return (
      <div className="">
          <div className=" flex flex-col lg:flex-row items-center justify-center lg:min-h-screen gap-7 lg:gap-10">
            <div className=" bg-[url('/login1.png')] bg-cover bg-no-repeat w-full h-[40vh] lg:h-screen lg:basis-[45%] lg:grow-0"></div>

            <div className="w-full px-5 lg:px-0">
              <div className="flex flex-col gap-1">
                <p className="text-primary text-2xl lg:text-5xl font-semibold">
                  Book.
                </p>
                <p className="text-2xl lg:text-5xl">
                  Start your journey today!!
                </p>
              </div>

              <div className="mt-5"> {children}</div>
            </div>
          </div>
      </div>
  );
}
