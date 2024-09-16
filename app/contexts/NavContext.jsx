"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";

const NavContext = createContext();

function NavProvider({ children }) {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  return (
    <NavContext.Provider
      value={{
        isMobileNav,
        setIsMobileNav,
        isSticky,
        setIsSticky,
        pathname,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

function useNav() {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav can't be used outside the NavProvider");
  return context;
}

export { NavProvider, useNav };
