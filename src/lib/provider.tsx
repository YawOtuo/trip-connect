"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { auth } from "@/app/firebase";
import useAuthState from "@/lib/hooks/useAuthState";

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const user = useAuthState(auth); // Assuming useAuthState returns the user object

  // Optional: Handle loading state or other UI logic based on user authentication status
  if (user === null) {
    // User is not authenticated
    return <div>Loading...</div>; // Example of a loading state
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;

