import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function EcgLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 90"
      aria-hidden="true"
      className={`ecg-layer ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 48 H120 L142 48 L156 28 L178 66 L198 18 L225 48 H350 L366 48 L382 34 L404 62 L430 48 H575 L596 48 L612 26 L636 70 L662 48 H900"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
      />
      <path
        d="M0 48 H900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.18"
      />
    </svg>
  );
}

export function PulseDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`pulse-divider ${className}`} aria-hidden="true">
      <div className="container-fz py-3">
        <EcgLine className="h-9 w-full opacity-70" />
      </div>
    </div>
  );
}

export function MetricCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(value);
      return;
    }

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const duration = 950;
        const tick = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustBadge({
  icon: Icon,
  label,
  detail,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={`surface-card scan-badge scan-sweep p-5 ${className}`}>
      <div className="relative z-10 flex min-w-0 gap-4">
        <span className="signal-node grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
          <Icon width={22} height={22} />
        </span>
        <div className="min-w-0">
          <h3 className="text-base">{label}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export function CircuitProcess({
  steps,
  columns = "lg:grid-cols-4",
}: {
  steps: { icone: LucideIcon; titre: string; texte: string }[];
  columns?: string;
}) {
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

  return (
    <ol className={`relative mt-8 grid gap-5 sm:grid-cols-2 ${columns}`}>
      <span className="circuit-track hidden lg:block">
        <span className="circuit-traveler" />
      </span>
      {steps.map((step, index) => (
        <li key={step.titre} className={`surface-card section-reveal p-6 ${delays[index % delays.length]}`}>
          <div className="relative z-10 flex items-center gap-3">
            <span className="signal-node grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              0{index + 1}
            </span>
            <step.icone width={22} height={22} className="text-accent" />
          </div>
          <h3 className="relative z-10 mt-4 text-lg">{step.titre}</h3>
          <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.texte}
          </p>
        </li>
      ))}
    </ol>
  );
}