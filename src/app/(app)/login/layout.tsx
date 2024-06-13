import NavMenuWrapper from "@/components/NavMenuWrapper";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NavMenuWrapper>
          <Navbar />
          {children}
        </NavMenuWrapper>
      </body>
    </html>
  );
}
