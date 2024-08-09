"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react';

function Error() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-medium">Not found</h2>
      <Button>
        <Link href="/">
          Go to homepage
        </Link>
      </Button>
    </div>
  );
}

export default Error;