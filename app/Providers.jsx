import { MobileProvider } from "@/app/_contexts/MobileContext";
import { PathProvider } from "@/app/_contexts/PathContext";
import { NavProvider } from "@/app/_contexts/NavContext";

export default function Providers({ children }) {
  return (
    <PathProvider>
      <MobileProvider>
        <NavProvider>{children}</NavProvider>
      </MobileProvider>
    </PathProvider>
  );
}
