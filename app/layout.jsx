import "@/app/_styles/globals.css";
import { NavProvider } from "@/app/contexts/NavContext";
import Nav from "@/app/_components/Nav";
import Footer from "@/app/_components/Footer";
import { worksans } from "@/app/_lib/fonts";
import { bgColor, textColor } from "@/app/_lib/themes";

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
        <NavProvider>
          <Nav />
        </NavProvider>
        <main className={`md:mt-14 mt-12 ${textColor}`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
