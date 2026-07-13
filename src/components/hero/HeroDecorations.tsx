import heroPattern from "@/assets/hero/hero-pattern.png";

export function HeroDecorations() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-repeat bg-[length:520px_520px] opacity-[0.80] sm:bg-[length:680px_680px] lg:bg-[length:760px_760px]"
        style={{
          backgroundImage: `url(${heroPattern})`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_48%,rgba(255,255,255,0.68)_100%)]"
      />
    </>
  );
}