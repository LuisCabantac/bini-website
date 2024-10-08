"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

type PathContextType = { pathname: string };

const pathContextDefaultValue: PathContextType = {
  pathname: "/",
};

const PathContext = createContext<PathContextType>(pathContextDefaultValue);

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
