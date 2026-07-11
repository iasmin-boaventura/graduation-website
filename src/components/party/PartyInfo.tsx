import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { motion } from "motion/react";

const eventDetails = [
  {
    label: "Data e horário",
    value: "1º de agosto de 2026",
    complement: ["Sábado", "Das 18h às 22h"],
    icon: Calendar,
  },
  {
    label: "Local",
    value: "Condomínio Residencial Valência",
    complement: ["Salão de festas", "Av. Cidade Jardim, 2680"],
    icon: MapPin,
  },
];

const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.314007623074!2d-45.88356262467982!3d-23.237063279023985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4ac613de7d25%3A0x70ed2c96b6b358e4!2sCondominio%20Residencial%20Valencia!5e1!3m2!1spt-BR!2sbr!4v1783807030090!5m2!1spt-BR!2sbr";

const mapsLocationUrl =
  "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio%20Residencial%20Val%C3%AAncia%2C%20Av.%20Cidade%20Jardim%2C%202680";

function PartyInfo() {
  return (
    <section
      id="comemoracao"
      className="px-6 py-24 sm:py-32"
      aria-labelledby="party-title"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-medium text-[#9CA3AF]">
            deployment_event.json
          </p>

          <h2
            id="party-title"
            className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#222222]"
          >
            Comemoração
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#6B7280]">
            Depois de tantos anos, desafios e conquistas, chegou a hora de
            celebrar essa nova versão da minha história com pessoas especiais.
          </p>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-12 overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-sm"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              {eventDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="rounded-[20px] border border-[#E5E7EB] bg-[#FCFCFC] p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FCEEF5] text-[#EFA5C5]">
                      <Icon aria-hidden="true" size={21} />
                    </div>

                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">
                      {detail.label}
                    </p>

                    <p className="mt-2 text-base font-semibold leading-7 text-[#222222]">
                      {detail.value}
                    </p>

                    {detail.complement && (
                      <div className="mt-1 space-y-1">
                        {detail.complement.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-6 text-[#6B7280]"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          <div className="border-t border-[#E5E7EB] bg-[#F9FAFB] p-4 sm:p-6">
            <div className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white">
              <iframe
                src={mapsEmbedUrl}
                title="Localização do Condomínio Residencial Valência"
                className="h-[320px] w-full sm:h-[380px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <a
                href={mapsLocationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#222222] transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5]"
                aria-label="Abrir a localização do Condomínio Residencial Valência no Google Maps"
              >
                <MapPin aria-hidden="true" size={18} />
                Abrir no Google Maps
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export { PartyInfo };
