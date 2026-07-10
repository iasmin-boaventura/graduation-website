import { Gallery } from '../components/gallery/Gallery'
import { Hero } from '../components/hero/Hero.tsx'
import { Timeline } from '../components/timeline/Timeline'

const sections = [
  {
    id: 'tcc',
    title: 'Projeto Final',
    description: 'Placeholder da seção de TCC.',
  },
  {
    id: 'comemoracao',
    title: 'Comemoração',
    description: 'Placeholder da seção de comemoração.',
  },
  {
    id: 'rsvp',
    title: 'Confirmar Presença',
    description: 'Placeholder da seção de RSVP.',
  },
]

function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Gallery />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="px-6 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-[#222222]">
              {section.title}
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6B7280]">
              {section.description}
            </p>
          </div>
        </section>
      ))}
    </>
  )
}

export default Home