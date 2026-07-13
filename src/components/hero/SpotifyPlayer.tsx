type SpotifyPlayerProps = {
  isOpen: boolean;
};

export function SpotifyPlayer({ isOpen }: SpotifyPlayerProps) {
  return (
    <div
      id="spotify-player"
      className={`mx-auto grid w-full max-w-xl transition-all duration-300 ease-out ${
        isOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <iframe
          title="Playlist da formatura no Spotify"
          className="w-full rounded-xl"
          src="https://open.spotify.com/embed/playlist/3CaktxSWRMcns8Q7l43RSe?utm_source=generator&si=7244616c646f4731"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}