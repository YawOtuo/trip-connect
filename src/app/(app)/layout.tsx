import NavMenuWrapper from "@/components/NavMenuWrapper";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "tripConnect",
  description: "Booking made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavMenuWrapper>
        <Navbar />
        <div> {children}</div>
      </NavMenuWrapper>
    </div>
  );
}
