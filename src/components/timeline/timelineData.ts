import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Laptop,
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
    title: "Início do Técnico em Informática",
    description:
      "O primeiro passo na tecnologia, onde a curiosidade por programação começou a virar caminho.",
    codeLabel: "init: technical_school",
    type: "academic",
    icon: Code2,
  },
  {
    id: "technical-school-completed",
    date: "2020",
    title: "Conclusão do Ensino Médio Técnico",
    description:
      "Uma etapa importante foi finalizada, deixando a base para os próximos desafios na área.",
    codeLabel: "status: completed",
    type: "academic",
    icon: Sparkles,
  },
  {
    id: "brcondos",
    date: "Out 2021",
    title: "BRCondos",
    description:
      "O início da minha trajetória profissional, antes de transformar a tecnologia no centro da minha carreira.",
    codeLabel: "role: administrative_assistant",
    type: "professional",
    icon: BriefcaseBusiness,
    period: "Outubro de 2021 — Agosto de 2023",
  },
  {
    id: "computer-science-start",
    date: "2022",
    title: "Ingresso em Ciência da Computação",
    description:
      "O começo da graduação e de uma jornada mais profunda pelo universo da computação.",
    codeLabel: "degree: computer_science",
    type: "academic",
    icon: GraduationCap,
  },
  {
    id: "gofix",
    date: "Ago 2023",
    title: "GoFix Repair Centro Técnico Especializado Apple",
    description:
      "Uma nova experiência profissional durante a graduação e mais um passo na construção da minha trajetória.",
    codeLabel: "role: administrative_assistant",
    type: "professional",
    icon: BriefcaseBusiness,
    period: "Agosto de 2023 — Dezembro de 2023",
  },
  {
    id: "acti",
    date: "Jan 2024",
    title: "ACTi Tecnologia e Sistemas de Informação",
    description:
      "A entrada oficial no desenvolvimento de software, transformando conhecimento técnico em experiência profissional.",
    codeLabel: "role: junior_developer",
    type: "professional",
    icon: Laptop,
    period: "Janeiro de 2024 — Maio de 2024",
  },
  {
    id: "adyen",
    date: "Jun 2024",
    title: "Adyen",
    description:
      "Um novo capítulo da minha trajetória como engenheira de software, marcado por aprendizado e crescimento profissional.",
    codeLabel: "role: software_engineer",
    type: "professional",
    icon: Laptop,
    period: "Junho de 2024 — Presente",
    isCurrent: true,
  },
  {
    id: "adyen-promotion",
    date: "Mai 2026",
    title: "Promoção na Adyen",
    description:
      "O reconhecimento de uma trajetória construída com aprendizado contínuo, dedicação e evolução.",
    codeLabel: "status: promoted",
    type: "professional",
    icon: Sparkles,
    period: "Maio de 2026",
    isPromotion: true,
  },
  {
    id: "graduation",
    date: "2026",
    title: "Conclusão da graduação",
    description:
      "Depois de tantos desafios, entregas e conquistas, chega a versão mais especial dessa jornada.",
    codeLabel: "release: graduation_2026",
    type: "academic",
    icon: GraduationCap,
  },
];