import { ArrowRight, Sparkles } from 'lucide-react'

import { Countdown } from './Countdown'
import { HeroCodeSnippet } from './HeroCodeSnippet'
import { HeroDecorations } from './HeroDecorations'
import { SpotifyPlayer } from './SpotifyPlayer'

const GRADUATION_DATE = '2026-08-01T00:00:00-03:00'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FFFFFF] px-6 py-32"
    >
      <HeroDecorations />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#6B7280] shadow-sm">
          <Sparkles size={16} className="text-[#F4B6CF]" aria-hidden="true" />
          Graduation Release • Version 2026.1
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
          Ciência da Computação • Turma 2026
        </p>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#222222] sm:text-6xl lg:text-[64px]">
          Iasmin Boaventura
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
          Um convite delicado para celebrar a chegada da versão mais especial da minha jornada:
          a formatura.
        </p>

        <div className="mt-10 w-full">
          <HeroCodeSnippet />
        </div>

        <div className="mt-10 w-full max-w-3xl">
          <Countdown targetDate={GRADUATION_DATE} />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#rsvp"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F4B6CF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#EFA5C5] focus:outline-none focus:ring-2 focus:ring-[#F4B6CF] focus:ring-offset-2"
          >
            Confirmar presença
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <a
            href="#comemoracao"
            className="inline-flex items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#222222] shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5] focus:outline-none focus:ring-2 focus:ring-[#F4B6CF] focus:ring-offset-2"
          >
            Ver detalhes
          </a>
        </div>

        <div className="mt-10 w-full">
          <SpotifyPlayer />
        </div>
      </div>
    </section>
  )
}