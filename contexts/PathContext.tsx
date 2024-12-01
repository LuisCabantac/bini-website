"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useContext } from "react";

type PathContextType = { pathname: string };

const pathContextDefaultValue: PathContextType = {
  pathname: "/",
};

const PathContext = createContext<PathContextType>(pathContextDefaultValue);

function PathProvider({ children }: { children: React.ReactNode }) {
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
