import { motion } from "motion/react";
import { Code2, GraduationCap, Laptop, Sparkles } from "lucide-react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  codeLabel: string;
  icon: typeof Code2;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "Início do Técnico em Informática",
    description:
      "O primeiro passo na tecnologia, onde a curiosidade por programação começou a virar caminho.",
    codeLabel: "init: technical_school",
    icon: Code2,
  },
  {
    year: "2020",
    title: "Conclusão do Ensino Médio Técnico",
    description:
      "Uma etapa importante foi finalizada, deixando a base para os próximos desafios na área.",
    codeLabel: "status: completed",
    icon: Sparkles,
  },
  {
    year: "2022",
    title: "Ingresso em Ciência da Computação",
    description:
      "O começo da graduação e de uma jornada mais profunda pelo universo da computação.",
    codeLabel: "degree: computer_science",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Primeiro emprego como desenvolvedora",
    description:
      "A teoria começou a encontrar a prática em projetos reais, código em produção e muito aprendizado.",
    codeLabel: "role: software_developer",
    icon: Laptop,
  },
  {
    year: "2026",
    title: "Conclusão da graduação",
    description:
      "Depois de tantos desafios, entregas e conquistas, chega a versão mais especial dessa jornada.",
    codeLabel: "release: graduation_2026",
    icon: GraduationCap,
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Timeline() {
  return (
    <section id="jornada" className="bg-[#F9FAFB] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-mono text-sm text-[#F4B6CF]">
            git log --journey
          </span>

          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#222222] sm:text-5xl">
            Minha Jornada
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6B7280] sm:text-lg">
            Uma linha do tempo delicada sobre os passos que transformaram
            curiosidade em carreira, graduação e celebração.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-[#E5E7EB] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={event.year}
                  className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div
                    className={`rounded-[20px] border border-[#E5E7EB] bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
                      isEven
                        ? "md:col-start-1 md:mr-12"
                        : "md:col-start-2 md:ml-12"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FCEEF5] text-[#F4B6CF]">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div>
                        <p className="font-mono text-sm text-[#9CA3AF]">
                          {event.codeLabel}
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-[#222222]">
                          {event.year}
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl font-semibold text-[#222222]">
                      {event.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-[#6B7280]">
                      {event.description}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white md:left-1/2"
                  >
                    <span className="h-3 w-3 rounded-full bg-[#F4B6CF]" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
