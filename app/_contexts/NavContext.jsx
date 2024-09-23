"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
    [handleSetIsSticky]
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
