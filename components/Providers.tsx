"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { MobileProvider } from "@/contexts/MobileContext";
import { PathProvider } from "@/contexts/PathContext";
import { NavProvider } from "@/contexts/NavContext";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
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
