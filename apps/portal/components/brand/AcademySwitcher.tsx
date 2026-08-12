"use client";

import { useOnboardingStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";

export function AcademySwitcher() {
  const currentAcademy = useOnboardingStore((s) => s.currentAcademy);
  const setAcademy = useOnboardingStore((s) => s.setAcademy);

  return (
    <div className="flex items-center gap-2 p-1 bg-surface-2 rounded-xl border border-border/50">
      <Button
        variant={currentAcademy === "atlasgr" ? "primary" : "ghost"}
        size="sm"
        className="px-4 py-1 text-xs font-bold rounded-lg transition-all"
        onClick={() => setAcademy("atlasgr")}
      >
        ATLASGR
      </Button>
      <Button
        variant={currentAcademy === "totaltrack" ? "primary" : "ghost"}
        size="sm"
        className={`px-4 py-1 text-xs font-bold rounded-lg transition-all ${
          currentAcademy === "totaltrack"
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
            : ""
        }`}
        onClick={() => setAcademy("totaltrack")}
      >
        Total Track
      </Button>
    </div>
  );
}
