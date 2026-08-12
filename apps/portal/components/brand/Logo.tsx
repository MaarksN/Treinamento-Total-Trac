import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/basePath";
import { useOnboardingStore } from "@/lib/store";
import { ACADEMY_THEMES } from "@/lib/themeTypes";
import { useState, useEffect } from "react";

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  const currentAcademy = useOnboardingStore((s) => s.currentAcademy);
  const theme = ACADEMY_THEMES[currentAcademy || "totaltrac"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={cn("h-8 w-32 animate-pulse bg-muted rounded", className)} />;

  if (!withWordmark) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE_PATH}${theme.favicon}`} alt={theme.name} width={28} height={28} style={{ objectFit: 'contain' }} />
      </span>
    );
  }

  // Fallback logos for Total Trac until we add actual SVG assets
  if (currentAcademy === "totaltrack") {
     return (
        <span className={cn("inline-flex items-center font-display font-black text-2xl tracking-tighter text-blue-600 dark:text-blue-400", className)} role="img" aria-label="Total Trac">
          TOTAL<span className="text-foreground">TRACK</span>
        </span>
     )
  }

  return (
    <span className={cn("inline-flex items-center", className)} role="img" aria-label="Total Trac">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE_PATH}${theme.logoLight}`}
        alt=""
        aria-hidden="true"
        width={140}
        height={31}
        className="block dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE_PATH}${theme.logoDark}`}
        alt=""
        aria-hidden="true"
        width={140}
        height={31}
        className="hidden dark:block"
      />
    </span>
  );
}
