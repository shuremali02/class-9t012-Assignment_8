// utils/portableTextComponents.tsx
import React from "react";

export  const portableTextComponents = {
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl font-bold">{children}</h1>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4">{children}</p>
    ),
  },
};
