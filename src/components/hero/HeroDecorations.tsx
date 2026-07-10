const codeDecorations = ['{}', '</>', '()', ';']

export function HeroDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-8 top-28 hidden font-mono text-4xl text-[#F4B6CF]/30 md:block">
        {codeDecorations[0]}
      </span>

      <span className="absolute right-12 top-36 hidden font-mono text-3xl text-[#9CA3AF]/30 lg:block">
        {codeDecorations[1]}
      </span>

      <span className="absolute bottom-32 left-16 hidden font-mono text-3xl text-[#9CA3AF]/25 lg:block">
        {codeDecorations[2]}
      </span>

      <span className="absolute bottom-24 right-20 hidden font-mono text-4xl text-[#F4B6CF]/25 md:block">
        {codeDecorations[3]}
      </span>

      <span className="absolute left-[18%] top-20 text-2xl text-[#F4B6CF]/50">
        ⋈
      </span>

      <span className="absolute bottom-40 right-[18%] text-xl text-[#F4B6CF]/40">
        ⋈
      </span>
    </div>
  )
}