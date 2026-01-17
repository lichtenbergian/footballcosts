"use client";

import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  maxWidth?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export function Card({ title, description, maxWidth, children }: CardProps) {
  const widthClass = maxWidth === "sm" ? "max-w-xs" : maxWidth === "md" ? "max-w-sm" : maxWidth === "lg" ? "max-w-md" : "w-full";
  
  return (
    <div className={`border border-border rounded-lg p-4 bg-background ${widthClass}`}>
      {title && <div className="font-semibold text-sm mb-1">{title}</div>}
      {description && <div className="text-xs text-muted-foreground mb-2">{description}</div>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}
