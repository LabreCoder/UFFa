import React from "react";

interface SectionHeaderProps {
  tag: string;
  tagColor?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  tag,
  tagColor = "text-uffa-gold",
  title,
  description,
  className = "mb-14",
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`${className} ${align === "center" ? "text-center" : "text-left"}`}>
      <span className={`text-xs md:text-sm font-bold tracking-widest uppercase block ${tagColor}`}>
        {tag}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-uffa-azulpetroleo-dark mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-uffa-navy/75 leading-relaxed text-base md:text-lg max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}