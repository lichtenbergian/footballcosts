"use client";

interface TextProps {
  content: string;
  variant?: "body" | "caption" | "label";
}

export function Text({ content, variant = "body" }: TextProps) {
  const sizeClass = variant === "caption" ? "text-xs" : variant === "label" ? "text-sm font-medium" : "text-sm";
  return <p className={`${sizeClass} text-muted-foreground`}>{content}</p>;
}
