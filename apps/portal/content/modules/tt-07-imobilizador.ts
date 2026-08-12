import type { ModuleContentFull } from "@/lib/types";

export const module_tt_07_imobilizador: ModuleContentFull = {
  slug: "tt-07-imobilizador",
  number: 0,
  title: "Imobilizador",
  shortDescription: "Módulo sobre Imobilizador da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Imobilizador", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Imobilizador para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Imobilizador",
    chart: "graph TD\n  A[Início] --> B(Imobilizador)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Imobilizador" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Imobilizador",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
