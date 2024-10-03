import "@/app/_styles/globals.css";

import { worksans } from "@/app/_lib/fonts";
import { bgColor, textColor } from "@/app/_lib/themes";

import Providers from "@/app/_components/Providers";
import Nav from "@/app/_components/Nav";
import Footer from "@/app/_components/Footer";

export const metadata = {
  title: {
    template: "BINI - %s",
    default: "BINI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className} ${bgColor}`}>
        <Providers>
          <Nav />
          <main className={`${textColor} mx-6 md:mx-16`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
