import type { ModuleContentFull } from "@/lib/types";

export const module_tt_06_kit_autonomia: ModuleContentFull = {
  slug: "tt-06-kit-autonomia",
  number: 0,
  title: "Kit Autonomia",
  shortDescription: "Módulo sobre Kit Autonomia da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Kit Autonomia", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Kit Autonomia para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Kit Autonomia",
    chart: "graph TD\n  A[Início] --> B(Kit Autonomia)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Kit Autonomia" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Kit Autonomia",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
