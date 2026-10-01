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
  className = "relative py-20 px-6 md:px-12 xl:px-16",
  colorDefault = DEFAULT_COLOR,
  id,
}: SectionDefaultProps) {
  return (
    <section id={id} className={`${className} ${colorDefault}`}>
      {children}
    </section>
  );
}