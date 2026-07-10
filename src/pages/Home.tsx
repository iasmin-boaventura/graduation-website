import { Hero } from '../components/hero/Hero.tsx'

const sections = [
  {
    id: "jornada",
    label: "Minha Jornada",
    description: "Linha do tempo da trajetória acadêmica.",
  },
  {
    id: "carreira",
    label: "Trajetória Profissional",
    description: "Cards com experiências profissionais.",
  },
  {
    id: "galeria",
    label: "Galeria",
    description: "Fotos especiais da jornada até a formatura.",
  },
  {
    id: "tcc",
    label: "Projeto Final",
    description: "Seção inspirada em um README do GitHub.",
  },
  {
    id: "comemoracao",
    label: "Comemoração",
    description: "Informações sobre a celebração da formatura.",
  },
  {
    id: "rsvp",
    label: "Confirmar Presença",
    description: "Formulário de confirmação conectado ao Supabase futuramente.",
  },
];

function Home() {
  return (
    <>
      <Hero />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="border-t border-[#E5E7EB] bg-[#F9FAFB] px-6 py-28"
        >
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-3 font-['JetBrains_Mono'] text-sm text-[#F4B6CF]">
              section/{section.id}
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold tracking-[-0.02em] text-[#222222]">
              {section.label}
            </h2>

            <p className="mt-4 max-w-[560px] text-base leading-7 text-[#6B7280]">
              {section.description}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}

export default Home;