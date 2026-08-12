import type { ModuleContentFull } from "@/lib/types";

export const module_tt_02_total_maquinas_4g: ModuleContentFull = {
  slug: "tt-02-total-maquinas-4g",
  number: 0,
  title: "Total Máquinas 4G",
  shortDescription: "Módulo sobre Total Máquinas 4G da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Total Máquinas 4G", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Total Máquinas 4G para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Total Máquinas 4G",
    chart: "graph TD\n  A[Início] --> B(Total Máquinas 4G)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Total Máquinas 4G" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Total Máquinas 4G",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
