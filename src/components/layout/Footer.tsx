import { GitBranch } from "lucide-react";

const repositoryUrl =
  "https://github.com/iasmin-boaventura/graduation-website";

function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FCFCFC]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <blockquote className="max-w-xl">
          <p className="font-serif text-base italic leading-7 text-[#6B7280] sm:text-lg">
            “Esforça-te e tem bom ânimo, e faze a obra; não temas, nem te desalentes, pois o Senhor Deus, meu Deus, é contigo; não te deixará, nem te desamparará, até que seja acabada toda a obra para o serviço da casa do Senhor.”{" "}
            <cite className="font-sans text-sm font-medium not-italic">
              1 Crônicas 28:20
            </cite>
          </p>
        </blockquote>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="text-sm text-[#6B7280]">
            Desenvolvido com ❤️ por Iasmin Boaventura
          </p>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:text-[#222222]"
            aria-label="Abrir o repositório do Graduation Website no GitHub"
          >
            <GitBranch size={17} aria-hidden="true" />
            Ver repositório no GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;