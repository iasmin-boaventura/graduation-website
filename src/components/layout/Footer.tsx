const gitLogItems = [
  "2018 started coding",
  "2024 first software job",
  "2026 graduation",
  "2026 celebrate()",
];

function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FCFCFC]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 font-['JetBrains_Mono'] text-sm text-[#9CA3AF]">
            git log
          </p>

          <ul className="space-y-2 font-['JetBrains_Mono'] text-sm text-[#6B7280]">
            {gitLogItems.map((item) => (
              <li key={item}>
                <span className="text-[#F4B6CF]">›</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 text-left md:text-right">
          <p className="font-['JetBrains_Mono'] text-sm text-[#9CA3AF]">
            Version 2026.1
          </p>

          <p className="text-sm text-[#6B7280]">
            © 2026 Iasmin Boaventura
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;