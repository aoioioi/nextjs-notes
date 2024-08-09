"use client";

import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Spinner } from "./spinner";
import { Button } from "./ui/button";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, and Plans. Unified. <span className="underline">Mini Notion</span>.
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Mini Notion is the connected workspace <br />
        for your best work.
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Mini Notion
            <ArrowRight className="size-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Minotion Free
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
