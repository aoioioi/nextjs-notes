import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { Heroes } from "@/components/heroes";
import React from 'react';

function page() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}

export default page;