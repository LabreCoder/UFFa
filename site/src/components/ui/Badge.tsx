import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "coral" | "green" | "red";
  className?: string;
}

export function Badge({ children, variant = "yellow", className = "" }: BadgeProps) {
  const variantStyles = {
    yellow: "bg-uffa-gold text-uffa-navy",
    blue: "bg-uffa-blue text-uffa-blue",
    coral: "bg-uffa-coral text-uffa-coral",
    green: "bg-uffa-tractorgreen text-uffa-tractorgreen",
    red: "bg-uffa-red text-black",
  };

  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}