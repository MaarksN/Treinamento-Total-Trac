import type { ModuleContentFull } from "@/lib/types";

export const module_tt_05_carreta_solar: ModuleContentFull = {
  slug: "tt-05-carreta-solar",
  number: 0,
  title: "Carreta Solar",
  shortDescription: "Módulo sobre Carreta Solar da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Carreta Solar", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Carreta Solar para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Carreta Solar",
    chart: "graph TD\n  A[Início] --> B(Carreta Solar)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Carreta Solar" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Carreta Solar",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
