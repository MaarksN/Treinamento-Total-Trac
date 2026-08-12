import type { ModuleContentFull } from "@/lib/types";

export const module_tt_03_total_temperatura_4g: ModuleContentFull = {
  slug: "tt-03-total-temperatura-4g",
  number: 0,
  title: "Total Temperatura 4G",
  shortDescription: "Módulo sobre Total Temperatura 4G da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Total Temperatura 4G", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Total Temperatura 4G para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Total Temperatura 4G",
    chart: "graph TD\n  A[Início] --> B(Total Temperatura 4G)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Total Temperatura 4G" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Total Temperatura 4G",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
