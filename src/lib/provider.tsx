"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { auth } from "@/app/firebase";
import useAuthState from "@/lib/hooks/useAuthState";

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  useAuthState(auth);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
