import "@/app/_styles/globals.css";
import { worksans } from "@/app/_lib/fonts";
import Nav from "@/app/_components/Nav";
import Footer from "@/app/_components/Footer";
import { NavProvider } from "@/app/contexts/NavContext";

export const metadata = {
  title: {
    template: "BINI - %s",
    default: "BINI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className} min-h-screen bg-[#ace4ea]`}>
        <NavProvider>
          <Nav />
        </NavProvider>
        <main className="text-[#091415]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
