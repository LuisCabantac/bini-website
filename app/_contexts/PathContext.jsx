"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const PathContext = createContext();

function PathProvider({ children }) {
  const pathname = usePathname();

  return (
    <PathContext.Provider
      value={{
        pathname,
      }}
    >
      {children}
    </PathContext.Provider>
  );
}

function usePath() {
  const context = useContext(PathContext);
  if (!context)
    throw new Error("usePath can't be used outside the PathProvider");
  return context;
}

export { PathProvider, usePath };
