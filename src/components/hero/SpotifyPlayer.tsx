import { Music } from 'lucide-react'
import { useState } from 'react'

export function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-xl">
      <button
        type="button"
        className="mx-auto flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#222222] shadow-sm transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5] focus:outline-none focus:ring-2 focus:ring-[#F4B6CF] focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls="spotify-player"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <Music size={18} aria-hidden="true" />
        Música
      </button>

      <div
        id="spotify-player"
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? 'mt-6 grid-rows-[1fr] opacity-100'
            : 'mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <iframe
            title="Playlist da formatura no Spotify"
            className="rounded-xl"
            src="https://open.spotify.com/embed/playlist/3CaktxSWRMcns8Q7l43RSe?utm_source=generator&si=7244616c646f4731"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}