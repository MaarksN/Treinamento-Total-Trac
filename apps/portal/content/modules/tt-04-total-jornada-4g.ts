import type { ModuleContentFull } from "@/lib/types";

export const module_tt_04_total_jornada_4g: ModuleContentFull = {
  slug: "tt-04-total-jornada-4g",
  number: 0,
  title: "Total Jornada 4G",
  shortDescription: "Módulo sobre Total Jornada 4G da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Total Jornada 4G", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Total Jornada 4G para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Total Jornada 4G",
    chart: "graph TD\n  A[Início] --> B(Total Jornada 4G)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Total Jornada 4G" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Total Jornada 4G",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
