"use client";

import { Navigation } from "@/components/navigation";
import { SearchCommand } from "@/components/search-command";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from 'react';

// NOTE: Alternative method using layout to check authorization instead of middleware
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  // if (isLoading) {
  //   return (
  //     <div className="h-full flex items-center justify-center">
  //       <Spinner size="lg" />
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return redirect("/");
  // }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />

      <div className="flex-1 h-full overflow-y-auto">
        <SearchCommand />

        {children}
      </div>
    </div>
  );
};

export default Layout;