import { motion } from "motion/react";
import { CalendarDays } from "lucide-react";
import { timelineEvents } from "./timelineData";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
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
            Uma linha do tempo sobre os passos acadêmicos e profissionais que
            transformaram curiosidade em carreira, graduação e celebração.
          </p>
        </motion.div>

        <div className="relative mt-16 sm:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-[#E5E7EB] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-10">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={event.id}
                  className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div
                    className={`rounded-[20px] border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 ${
                      event.isPromotion
                        ? "border-[#F4B6CF]/60 bg-[#FCEEF5]/40"
                        : event.isCurrent
                          ? "border-[#F4B6CF]/60"
                          : "border-[#E5E7EB]"
                    } ${
                      isEven
                        ? "md:col-start-1 md:mr-10"
                        : "md:col-start-2 md:ml-10"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FCEEF5] text-[#F4B6CF]">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">
                            {event.type === "academic"
                              ? "Acadêmico"
                              : "Profissional"}
                          </span>

                          <span
                            aria-hidden="true"
                            className="text-xs text-[#D1D5DB]"
                          >
                            •
                          </span>

                          <span className="text-lg font-semibold text-[#222222]">
                            {event.date}
                          </span>

                          {event.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                              Atual
                            </span>
                          )}
                        </div>

                        <p className="mt-1 truncate font-mono text-xs text-[#9CA3AF] sm:text-sm">
                          {event.codeLabel}
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#222222] sm:text-2xl">
                      {event.title}
                    </h3>

                    {event.period && (
                      <div className="mt-3 flex items-start gap-2 text-sm text-[#9CA3AF]">
                        <CalendarDays
                          className="mt-0.5 shrink-0"
                          size={15}
                          strokeWidth={1.8}
                        />
                        <span>{event.period}</span>
                      </div>
                    )}

                    <p className="mt-3 text-sm leading-6 text-[#6B7280] sm:text-base">
                      {event.description}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-7 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white md:left-1/2"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F4B6CF]" />
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