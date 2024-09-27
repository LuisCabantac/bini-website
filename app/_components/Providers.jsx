"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { MobileProvider } from "@/app/_contexts/MobileContext";
import { PathProvider } from "@/app/_contexts/PathContext";
import { NavProvider } from "@/app/_contexts/NavContext";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PathProvider>
        <MobileProvider>
          <NavProvider>{children}</NavProvider>
        </MobileProvider>
      </PathProvider>
    </QueryClientProvider>
  );
}
