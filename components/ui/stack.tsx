"use client";

import { ReactNode } from "react";

interface StackProps {
  direction?: "horizontal" | "vertical";
  gap?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export function Stack({ direction = "vertical", gap = "md", children }: StackProps) {
  const gapClass = gap === "sm" ? "gap-2" : gap === "lg" ? "gap-6" : "gap-4";
  const dirClass = direction === "horizontal" ? "flex-row" : "flex-col";
  return <div className={`flex ${dirClass} ${gapClass}`}>{children}</div>;
}
