"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { Title } from "./title";
import { Banner } from "./banner";
import { Menu } from "./menu";
import { Publish } from "./publish";

interface SubNavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const SubNavbar = ({
  isCollapsed,
  onResetWidth
}: SubNavbarProps) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    // NOTE: Convert string type to Id type to match our query
    documentId: params.documentId as Id<"documents">
  });

  if (document === undefined) {
    return (
      <div className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />

        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </div>
    );
  }

  if (document === null) {
    return null;
  }

  return (
    <>
      <div className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="size-6 text-muted-foreground"
          />
        )}

        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />

          <div className="flex items-center gap-x-2">
            <Publish initialData={document} />
            <Menu documentId={document._id} />
          </div>
        </div>
      </div>

      {document.isArchived && (
        <Banner documentId={document._id} />
      )}
    </>
  );
};
