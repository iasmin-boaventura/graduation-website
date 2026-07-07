import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Jornada", href: "#jornada" },
  { label: "Carreira", href: "#carreira" },
  { label: "Galeria", href: "#galeria" },
  { label: "TCC", href: "#tcc" },
  { label: "Comemoração", href: "#comemoracao" },
];

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 16);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? "border-b border-[#E5E7EB] bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="font-['Cormorant_Garamond'] text-2xl font-semibold tracking-[-0.02em] text-[#222222]"
        >
          Iasmin Boaventura
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#222222]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#rsvp"
          className="rounded-2xl bg-[#F4B6CF] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#EFA5C5]"
        >
          Confirmar presença
        </a>
      </nav>
    </header>
  );
}

export default Navbar;