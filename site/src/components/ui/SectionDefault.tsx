import { ReactNode } from "react";

const DEFAULT_COLOR = "bg-uffa-white/10";

interface SectionDefaultProps {
  children: ReactNode;
  className?: string;
  colorDefault?: string;
  id?: string;
}

export function SectionDefault({
  children,
  className = "relative py-18 px-6",
  colorDefault = DEFAULT_COLOR,
  id,
}: SectionDefaultProps) {
  return (
    <section id={id} className={`${className} ${colorDefault}`}>
      {children}
    </section>
  );
}
