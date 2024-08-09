"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import React from 'react';
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  // NOTE: Named after our documents.ts file
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s Minotion</h2>

      <Button onClick={onCreate}>
        <PlusCircle className="size-4 mr-2" />
        Create a note
      </Button>

      {/* <Image
        src="/empty.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
      /> */}

      {/* <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="Empty"
        className="hidden dark:block"
      /> */}
    </div>
  );
};

export default DocumentsPage;