import React from 'react';

function layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      {children}
    </div>
  );
}

export default layout;