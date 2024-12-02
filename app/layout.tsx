import React from "react";

import "@/styles/globals.css";
import { worksans } from "@/lib/fonts";

import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    template: "BINI - %s",
    default: "BINI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${worksans.className} bg-[#ace4ea]`}>
        <Providers>
          <Nav />
          <main className="mx-auto max-w-5xl px-6 text-[#245055] md:px-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
