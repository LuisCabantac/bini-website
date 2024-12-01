"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface MobileContextType {
  isMobile: boolean;
}

const mobileContextDefaultValue: MobileContextType = {
  isMobile: false,
};

const MobileContext = createContext<MobileContextType>(
  mobileContextDefaultValue,
);

function MobileProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 900);
  }, [setIsMobile]);

  useEffect(
    function () {
      window.addEventListener("resize", handleIsMobile);
      handleIsMobile();

      return () => {
        window.removeEventListener("resize", handleIsMobile);
      };
    },
    [handleIsMobile],
  );

  return (
    <MobileContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
}

function useMobileWidth() {
  const context = useContext(MobileContext);
  if (!context)
    throw new Error("useMobileWidth can't be used outside the MobileProvider");
  return context;
}

export { MobileProvider, useMobileWidth };
