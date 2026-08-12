import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossário Técnico — Portal Total Trac",
};

export default function GlossarioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
