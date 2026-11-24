import React from "react";

interface SectionHeaderProps {
  tag: string;
  tagColor?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeader({
  tag,
  tagColor = "text-uffa-blue",
  title,
  description,
  className = "mb-14",
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  return (
    <div className={`${className} ${align === "center" ? "text-center" : "text-left"}`}>
      <span className={`text-xs md:text-sm font-bold tracking-widest uppercase block ${tagColor}`}>
        {tag}
      </span>
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl mt-3 leading-tight ${tone === "dark" ? "text-white" : "text-uffa-azulpetroleo-dark"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 ${tone === "dark" ? "text-white/75" : "text-uffa-navy/75"} leading-relaxed text-base md:text-lg max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}