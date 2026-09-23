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
  tagColor = "text-uffa-blue/70",
  title,
  description,
  className = "mb-14",
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`${className} ${align === "center" ? "text-center" : ""}`}>
      <span className={`text-xs font-medium tracking-widest uppercase ${tagColor}`}>
        {tag}
      </span>
      <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-uffa-navy/60 leading-relaxed text-sm ${align === "center" ? "mx-auto" : ""} max-w-lg`}>
          {description}
        </p>
      )}
    </div>
  );
}