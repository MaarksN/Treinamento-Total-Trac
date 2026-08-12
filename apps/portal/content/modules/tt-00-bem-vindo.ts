import type { ModuleContentFull } from "@/lib/types";

export const module_tt_00_bem_vindo: ModuleContentFull = {
  slug: "tt-00-bem-vindo",
  number: 0,
  title: "Bem-vindo à Total Trac",
  shortDescription: "Módulo sobre Bem-vindo à Total Trac da Total Trac.",
  durationMinutes: 30,
  academy: "totaltrac",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Trac"],
  objectives: ["Compreender Bem-vindo à Total Trac", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Bem-vindo à Total Trac para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Bem-vindo à Total Trac",
    chart: "graph TD\n  A[Início] --> B(Bem-vindo à Total Trac)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Bem-vindo à Total Trac" }, " é uma solução desenvolvida pela Total Trac para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Bem-vindo à Total Trac",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
