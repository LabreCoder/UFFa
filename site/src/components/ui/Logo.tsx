interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  return (
    <span className={`font-display not-italic ${className}`}>
      <span className={tone === "dark" ? "text-white" : "text-uffa-navy"}>UFF</span>
      <span className={`italic ${tone === "dark" ? "text-uffa-tractorgreen" : "text-uffa-azulpetroleo"}`}>a</span>
    </span>
  );
}
