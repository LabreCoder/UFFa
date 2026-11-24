import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white border border-uffa-navy/10 rounded-3xl p-6 transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}