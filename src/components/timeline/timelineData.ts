import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Backpack,
  Sparkles,
} from "lucide-react";

export type TimelineEventType = "academic" | "professional";

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  codeLabel: string;
  type: TimelineEventType;
  icon: LucideIcon;
  period?: string;
  isCurrent?: boolean;
  isPromotion?: boolean;
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "technical-school-start",
    date: "2018",
    title: "Ensino Médio Técnico em Informática",
    description:
      "O curso que me escolheu! TCC aprovado com 9,5, e média 10 em todas as matérias de programação backend.",
    codeLabel: "status: completed",
    type: "academic",
    icon: Backpack,
    period: "Jan/2018 — Dez/2020",
  },
  {
    id: "brcondos",
    date: "2021",
    title: "BRCondos",
    description:
      "O início da minha trajetória profissional. A oportunidade que me permitiu desenvolver habilidades essenciais até hoje.",
    codeLabel: "role: adm_assistant",
    type: "professional",
    icon: BriefcaseBusiness,
    period: "Out/2021 — Ago/2023",
  },
  {
    id: "computer-science-start",
    date: "2022",
    title: "Bacharel em Ciência da Computação",
    description:
      "O começo da graduação. Um marco acadêmico e pessoal. Uma decisão que precisou de coragem e confiança.",
    codeLabel: "status: initializing",
    type: "academic",
    icon: GraduationCap,
  },
  {
    id: "gofix",
    date: "2023",
    title: "GoFix Repair",
    description:
      "Uma nova experiência profissional que permitiu com que eu me conectasse com pessoas incríveis.",
    codeLabel: "role: adm_assistant",
    type: "professional",
    icon: BriefcaseBusiness,
    period: "Ago/2023 — Dez/2023",
  },
  {
    id: "acti",
    date: "2024",
    title: "ACTi",
    description:
      "Primeira experiência profissional no desenvolvimento de software.",
    codeLabel: "role: junior_developer",
    type: "professional",
    icon: Laptop,
    period: "Jan/2024 — Mai/2024",
  },
  {
    id: "adyen",
    date: "2024",
    title: "Adyen · Estágio",
    description:
      "A oportunidade que mudaria minha vida.",
    codeLabel: "role: software_engineer",
    type: "professional",
    icon: Laptop,
    period: "Jun/2024 — Abr/2026",
  },
  {
    id: "adyen-promotion",
    date: "2026",
    title: "Adyen · Efetivação",
    description:
      "O reconhecimento de uma trajetória construída com dedicação, fé e muito apoio de pessoas incríveis que marcaram essa trajetória! Oficialmente Engenheira de Software <3",
    codeLabel: "status: promoted",
    type: "professional",
    icon: Sparkles,
    period: "Mai/2026 - ",
    isPromotion: true,
    isCurrent: true,
  },
  {
    id: "graduation",
    date: "2026",
    title: "Graduação",
    description:
      "Depois de tantos desafios, entregas e orações, chega a versão mais especial dessa jornada!",
    codeLabel: "release: graduation_2026",
    type: "academic",
    icon: GraduationCap,
  },
];