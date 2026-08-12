import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel Administrativo — Portal Total Trac",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
