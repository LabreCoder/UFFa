export interface BarItem {
  label: string;
  detail?: string;
  value: number;
  barClass?: string;
}

interface BarChartProps {
  title: string;
  caption?: string;
  items: BarItem[];
  max?: number;
  unit?: string;
  tone?: "light" | "dark";
}

// Gráfico de barras horizontal simples: uma série, valor escrito ao lado de cada barra.
export function BarChart({ title, caption, items, max, unit = "", tone = "light" }: BarChartProps) {
  const top = max ?? Math.max(1, ...items.map((i) => i.value));
  const dark = tone === "dark";

  return (
    <figure className="flex flex-col gap-4">
      <figcaption>
        <p className={`font-display text-2xl ${dark ? "text-white" : "text-uffa-azulpetroleo-dark"}`}>{title}</p>
        {caption && <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-uffa-navy/70"}`}>{caption}</p>}
      </figcaption>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item.label}
            title={`${item.label}${item.detail ? ` · ${item.detail}` : ""}: ${item.value.toLocaleString("pt-BR")}${unit}`}
            className="grid grid-cols-[minmax(0,11rem)_1fr_auto] items-center gap-3 group"
          >
            <span className={`text-sm leading-tight ${dark ? "text-white/85" : "text-uffa-navy"}`}>
              <span className="font-semibold">{item.label}</span>
              {item.detail && (
                <span className={`block text-xs ${dark ? "text-white/60" : "text-uffa-navy/60"}`}>{item.detail}</span>
              )}
            </span>
            <span className={`h-3 rounded-full ${dark ? "bg-white/10" : "bg-uffa-navy/5"}`}>
              <span
                className={`block h-full rounded-full transition-opacity group-hover:opacity-80 ${
                  item.barClass ?? (dark ? "bg-uffa-tractorgreen" : "bg-uffa-azulpetroleo")
                }`}
                style={{ width: `${(item.value / top) * 100}%` }}
              />
            </span>
            <span className={`text-sm font-semibold tabular-nums ${dark ? "text-white" : "text-uffa-navy"}`}>
              {item.value.toLocaleString("pt-BR")}
              {unit}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
