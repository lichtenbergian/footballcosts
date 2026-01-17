"use client";

interface BadgeProps {
  text: string;
  variant?: "default" | "success" | "warning" | "error";
}

export function Badge({ text, variant = "default" }: BadgeProps) {
  const colorClass = variant === "success" ? "bg-green-100 text-green-800" 
    : variant === "warning" ? "bg-yellow-100 text-yellow-800"
    : variant === "error" ? "bg-red-100 text-red-800"
    : "bg-border text-foreground";
  return <span className={`px-2 py-0.5 rounded text-xs ${colorClass}`}>{text}</span>;
}
