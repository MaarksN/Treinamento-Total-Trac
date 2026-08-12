import type { ModuleContentFull } from "@/lib/types";

export const module_tt_00_bem_vindo: ModuleContentFull = {
  slug: "tt-00-bem-vindo",
  number: 0,
  title: "Bem-vindo à Total Track",
  shortDescription: "Módulo sobre Bem-vindo à Total Track da Total Track.",
  durationMinutes: 30,
  academy: "totaltrack",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Track"],
  objectives: ["Compreender Bem-vindo à Total Track", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o Bem-vindo à Total Track para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - Bem-vindo à Total Track",
    chart: "graph TD\n  A[Início] --> B(Bem-vindo à Total Track)"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "Bem-vindo à Total Track" }, " é uma solução desenvolvida pela Total Track para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "Bem-vindo à Total Track",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
