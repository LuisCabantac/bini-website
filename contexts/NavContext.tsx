"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface NavContextType {
  isMobileNav: boolean;
  setIsMobileNav: (v: boolean | ((prev: boolean) => boolean)) => void;
  isSticky: boolean;
  setIsSticky: (v: boolean) => void;
}

const navContextDefaultValue: NavContextType = {
  isMobileNav: false,
  setIsMobileNav: () => {},
  isSticky: false,
  setIsSticky: () => {},
};

const NavContext = createContext<NavContextType>(navContextDefaultValue);

function NavProvider({ children }: { children: React.ReactNode }) {
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleSetIsSticky = useCallback(() => {
    if (window.scrollY >= 40) {
      setIsSticky(true);
    } else setIsSticky(false);
  }, [setIsSticky]);

  useEffect(
    function () {
      window.addEventListener("scroll", handleSetIsSticky);

      return () => window.addEventListener("scroll", handleSetIsSticky);
    },
    [handleSetIsSticky],
  );

  return (
    <NavContext.Provider
      value={{
        isMobileNav,
        setIsMobileNav,
        isSticky,
        setIsSticky,
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
