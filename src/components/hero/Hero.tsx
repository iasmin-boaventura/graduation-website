import { MapPin, Music, GraduationCap } from "lucide-react";
import { useState } from "react";

import { Countdown } from "./Countdown";
import { HeroCodeSnippet } from "./HeroCodeSnippet";
import { HeroDecorations } from "./HeroDecorations";
import { SpotifyPlayer } from "./SpotifyPlayer";

const GRADUATION_DATE = "2026-08-01T00:00:00-03:00";

export function Hero() {
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FFFFFF] px-6 py-32"
    >
      <HeroDecorations />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#6B7280] shadow-sm">
          <GraduationCap
            size={16}
            className="text-[#F4B6CF]"
            aria-hidden="true"
          />
          Ciência da Computação • 2026
        </div>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#222222] sm:text-6xl lg:text-[64px]">
          Iasmin Boaventura
        </h1>

        <blockquote className="mt-6 max-w-3xl">
          <p className="font-serif text-[13px] italic leading-5 text-[#6B7280] sm:text-xl sm:leading-8">
            “Consagre ao Senhor tudo o que você faz, e os seus planos serão
            bem-sucedidos.”{" "}
            <cite className="font-sans text-[11px] font-medium not-italic sm:text-sm">
              Provérbios 16:3
            </cite>
          </p>
        </blockquote>

        <div className="mt-7 max-w-xl rounded-[20px] border border-[#F4B6CF]/50 bg-[#FCEEF5]/75 px-5 py-4 shadow-sm backdrop-blur-sm sm:px-7 sm:py-5">
          <p className="text-base font-medium leading-7 text-[#6B7280] sm:text-lg sm:leading-8">
            Venha celebrar minha formatura comigo, você faz parte dessa
            história!{" "}
            <span className="whitespace-nowrap font-semibold text-[#EFA5C5]">
              &lt;3
            </span>
          </p>
        </div>

        <div className="mt-10 w-full max-w-3xl">
          <Countdown targetDate={GRADUATION_DATE} />
        </div>

        <div className="mt-10 w-full">
          <HeroCodeSnippet />
        </div>

        <div className="mt-8 grid w-full max-w-[300px] grid-cols-2 gap-3">
          <a
            href="#comemoracao"
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#222222] shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5] focus:outline-none focus:ring-2 focus:ring-[#F4B6CF] focus:ring-offset-2"
          >
            <MapPin size={18} aria-hidden="true" />
            Detalhes
          </a>

          <button
            type="button"
            aria-expanded={isPlaylistOpen}
            aria-controls="spotify-player"
            onClick={() => setIsPlaylistOpen((currentValue) => !currentValue)}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#222222] shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5] focus:outline-none focus:ring-2 focus:ring-[#F4B6CF] focus:ring-offset-2"
          >
            <Music size={18} aria-hidden="true" />
            Playlist
          </button>
        </div>

        <div className="mt-6 w-full">
          <SpotifyPlayer isOpen={isPlaylistOpen} />
        </div>
      </div>
    </section>
  );
}
