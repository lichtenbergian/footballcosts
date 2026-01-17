"use client";

import { ReactNode } from "react";

interface GridProps {
  columns?: number;
  gap?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export function Grid({ columns = 2, gap = "md", children }: GridProps) {
  const gapClass = gap === "sm" ? "gap-2" : gap === "lg" ? "gap-6" : "gap-4";
  return (
    <div className={`grid ${gapClass}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {children}
    </div>
  );
}
