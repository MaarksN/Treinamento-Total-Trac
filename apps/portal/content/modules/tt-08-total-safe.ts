import type { ModuleContentFull } from "@/lib/types";

export const module_tt_08_total_safe: ModuleContentFull = {
  slug: "tt-08-total-safe",
  number: 0,
  title: "Total Safe",
  shortDescription: "Módulo sobre Total Safe da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Total Safe", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Total Safe para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Total Safe",
    chart: "graph TD\n  A[Início] --> B(Total Safe)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Total Safe" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Total Safe",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
