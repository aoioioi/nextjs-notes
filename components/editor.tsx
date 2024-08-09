"use client";

import React from 'react';
import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  // const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    console.log("Uploading file");
    // const response = await edgestore.publicFiles.upload({
    //   file,
    // });

    // return response.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? JSON.parse(initialContent) as PartialBlock[]
      : undefined,
    // uploadFile: handleUpload
  });

  return (
    <BlockNoteView
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      editor={editor}
      editable={editable}
      onChange={() => { onChange(JSON.stringify(editor.document, null, 2)); }}
    />
  );
};

export default Editor;