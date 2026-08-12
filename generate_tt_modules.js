const fs = require('fs');
const path = require('path');

const ttModulesMeta = `
  // --- TOTAL TRACK MODULES ---
  {
    slug: "tt-00-bem-vindo",
    number: 16,
    title: "Bem-vindo à Total Track",
    shortDescription: "Apresentação da empresa, ecossistema e visão geral de tecnologias e soluções logísticas.",
    durationMinutes: 30,
    academy: "totaltrack", status: "ready", category: "Fundamentos Total Track",
  },
  {
    slug: "tt-01-total-auto-4g",
    number: 17,
    title: "Total Auto 4G",
    shortDescription: "Monitoramento completo do veículo, controle de desempenho e segurança com opções de RFID e Bloqueio.",
    durationMinutes: 40,
    academy: "totaltrack", status: "ready", category: "Soluções para Veículos",
  },
  {
    slug: "tt-02-total-maquinas-4g",
    number: 18,
    title: "Total Máquinas 4G",
    shortDescription: "Gestão de máquinas pesadas e equipamentos com controle de horas e áreas de trabalho.",
    durationMinutes: 30,
    academy: "totaltrack", status: "ready", category: "Soluções para Máquinas e Ativos",
  },
  {
    slug: "tt-03-total-temperatura-4g",
    number: 19,
    title: "Total Temperatura 4G",
    shortDescription: "Controle de cargas sensíveis com monitoramento de variações térmicas em tempo real.",
    durationMinutes: 35,
    academy: "totaltrack", status: "ready", category: "Monitoramento Especializado",
  },
  {
    slug: "tt-04-total-jornada-4g",
    number: 20,
    title: "Total Jornada 4G",
    shortDescription: "Controle de jornada online, reduzindo riscos trabalhistas e automatizando processos burocráticos.",
    durationMinutes: 40,
    academy: "totaltrack", status: "ready", category: "Monitoramento Especializado",
  },
  {
    slug: "tt-05-carreta-solar",
    number: 21,
    title: "Carreta Solar",
    shortDescription: "Monitoramento inteligente de implementos com painel solar e bateria de longa duração.",
    durationMinutes: 30,
    academy: "totaltrack", status: "ready", category: "Soluções para Máquinas e Ativos",
  },
  {
    slug: "tt-06-kit-autonomia",
    number: 22,
    title: "Kit Autonomia (Carreta 4G)",
    shortDescription: "Rastreamento de carretas com foco em segurança, possuindo bateria para até 30 dias desengatada.",
    durationMinutes: 35,
    academy: "totaltrack", status: "ready", category: "Soluções para Máquinas e Ativos",
  },
  {
    slug: "tt-07-imobilizador",
    number: 23,
    title: "Imobilizador 4G",
    shortDescription: "Proteção contra roubo e uso indevido, resistente a Jammer, com atuação inteligente autônoma.",
    durationMinutes: 45,
    academy: "totaltrack", status: "ready", category: "Segurança",
  },
  {
    slug: "tt-08-total-safe",
    number: 24,
    title: "Total Safe (Videotelemetria)",
    shortDescription: "Câmeras com IA para monitoramento de comportamento, detecção de fadiga, distração e prevenção de acidentes.",
    durationMinutes: 45,
    academy: "totaltrack", status: "ready", category: "Segurança",
  }
];
`;

const metaPath = 'apps/portal/content/modules/meta.ts';
let metaContent = fs.readFileSync(metaPath, 'utf8');
metaContent = metaContent.replace('];\n\nexport function getModuleMeta', ttModulesMeta + '\nexport function getModuleMeta');
fs.writeFileSync(metaPath, metaContent);
console.log("Updated meta.ts with TT modules");

// Create template for TT modules
const createModuleFile = (slug, title) => {
  const code = `import type { ModuleContentFull } from "@/lib/types";

export const module_${slug.replace(/-/g, '_')}: ModuleContentFull = {
  slug: "${slug}",
  number: 0,
  title: "${title}",
  shortDescription: "Módulo sobre ${title} da Total Track.",
  durationMinutes: 30,
  academy: "totaltrack",
  status: "ready",
  category: "Geral",
  sources: ["Documentação Total Track"],
  objectives: ["Compreender ${title}", "Entender as aplicações"],
  scenario: "Você precisa entender como funciona o ${title} para aplicar na operação logística.",
  diagram: {
    title: "Arquitetura - ${title}",
    chart: "graph TD\\n  A[Início] --> B(${title})"
  },
  sections: [
    {
      id: "intro",
      title: "Introdução",
      blocks: [
        {
          type: "text",
          paragraphs: [
            ["O ", { term: "${title}" }, " é uma solução desenvolvida pela Total Track para otimizar operações."],
          ],
        },
      ],
    }
  ],
  summary: ["O produto resolve dores logísticas", "Fácil instalação e monitoramento contínuo"],
  finalChecklist: ["Identificar o cenário correto", "Conhecer as especificações"],
  mindMap: {
    root: "${title}",
    branches: [
      { label: "Características", items: ["Funcionalidade 1", "Funcionalidade 2"] },
      { label: "Aplicações", items: ["Cenário A", "Cenário B"] }
    ]
  }
};
`;
  fs.writeFileSync('apps/portal/content/modules/' + slug + '.ts', code);
};

const slugs = [
  {slug: "tt-00-bem-vindo", title: "Bem-vindo à Total Track"},
  {slug: "tt-01-total-auto-4g", title: "Total Auto 4G"},
  {slug: "tt-02-total-maquinas-4g", title: "Total Máquinas 4G"},
  {slug: "tt-03-total-temperatura-4g", title: "Total Temperatura 4G"},
  {slug: "tt-04-total-jornada-4g", title: "Total Jornada 4G"},
  {slug: "tt-05-carreta-solar", title: "Carreta Solar"},
  {slug: "tt-06-kit-autonomia", title: "Kit Autonomia"},
  {slug: "tt-07-imobilizador", title: "Imobilizador"},
  {slug: "tt-08-total-safe", title: "Total Safe"}
];

slugs.forEach(s => createModuleFile(s.slug, s.title));
console.log("Created TT module files");

// Update index.ts
const indexPath = 'apps/portal/content/modules/index.ts';
let indexContent = fs.readFileSync(indexPath, 'utf8');

const imports = slugs.map(s => 'import { module_' + s.slug.replace(/-/g, '_') + ' } from "./' + s.slug + '";').join('\n');
indexContent = indexContent.replace(
  'export { moduleMetas, getModuleMeta };',
  'export { moduleMetas, getModuleMeta };\n\n' + imports
);

const exportsObj = slugs.map(s => '  [module_' + s.slug.replace(/-/g, '_') + '.slug]: module_' + s.slug.replace(/-/g, '_') + ',').join('\n');
indexContent = indexContent.replace(
  '  [module15.slug]: module15,\n};',
  '  [module15.slug]: module15,\n' + exportsObj + '\n};'
);

fs.writeFileSync(indexPath, indexContent);
console.log("Updated index.ts");
