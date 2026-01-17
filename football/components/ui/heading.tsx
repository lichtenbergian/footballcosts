"use client";

interface HeadingProps {
  text: string;
  level?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({ text, level = "h2" }: HeadingProps) {
  const Tag = level;
  const sizeClass = level === "h1" ? "text-2xl" : level === "h2" ? "text-xl" : level === "h3" ? "text-lg" : "text-base";
  return <Tag className={`${sizeClass} font-semibold`}>{text}</Tag>;
}
