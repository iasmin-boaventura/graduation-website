import { FileText, GitBranch } from "lucide-react";
import { motion } from "motion/react";

import tccPresentation from "../../assets/tcc/tcc-apresentacao.jpeg";

const tccLinks = {
  pdf: "https://drive.google.com/file/d/1PIDiZCdnjMIEYMGuIx8-C0xDqdqqBnMA/view?usp=sharing",
  repository: "https://github.com/iasmin-boaventura/tcc-cobb",
};

function TCC() {
  return (
    <section
      id="tcc"
      className="scroll-mt-20 bg-[#F9FAFB] px-6 py-24 sm:py-32"
      aria-labelledby="tcc-title"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-medium text-[#9CA3AF]">
            README.md
          </p>

          <h2
            id="tcc-title"
            className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#222222]"
          >
            Projeto Final
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#6B7280]">
            Um projeto que reuniu tecnologia, pesquisa e propósito para
            transformar conhecimento acadêmico em uma solução com impacto real.
          </p>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-sm font-medium text-[#9CA3AF]">
                  TCC • Ciência da Computação
                </p>

                <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#222222] sm:text-4xl">
                  Sistema Automatizado para Cálculo de Ângulo de Cobb:
                  Inteligência Artificial Aplicada à Detecção de Escoliose
                </h3>

                <div className="mt-6 space-y-4 text-base leading-7 text-[#6B7280] sm:text-lg sm:leading-8">
                  <p>
                    Neste Trabalho de Conclusão de Curso, desenvolvi com meu
                    grupo um protótipo baseado em Visão Computacional e
                    Inteligência Artificial para calcular automaticamente o
                    ângulo de Cobb em imagens de raio-X, auxiliando a avaliação
                    médica de escoliose. Atuei no treinamento do modelo de IA,
                    na definição da arquitetura da aplicação e na especificação
                    de requisitos e casos de uso.
                  </p>

                  <p>
                    A aplicação utiliza YOLOv8 para detectar as vértebras
                    envolvidas no cálculo, processar a imagem e retornar o valor
                    do ângulo calculado junto da imagem analisada, permitindo
                    integração com aplicações web e outros sistemas. O objetivo
                    foi contribuir para tornar o diagnóstico e o acompanhamento
                    da escoliose mais eficientes, precisos e acessíveis para
                    profissionais da saúde e pacientes.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={tccLinks.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#F4B6CF] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#EFA5C5]"
                  aria-label="Abrir o PDF do Trabalho de Conclusão de Curso no Google Drive"
                >
                  <FileText aria-hidden="true" size={18} />
                  Ler TCC em PDF
                </a>

                <a
                  href={tccLinks.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#222222] transition duration-200 hover:scale-[1.02] hover:bg-[#FCEEF5]"
                  aria-label="Abrir o repositório do projeto no GitHub"
                >
                  <GitBranch aria-hidden="true" size={18} />
                  Ver repositório
                </a>
              </div>
            </div>

            <div className="min-h-[420px] overflow-hidden bg-[#FCEEF5] lg:min-h-full">
              <img
                src={tccPresentation}
                alt="Iasmin segurando o Trabalho de Conclusão de Curso e um buquê de flores após a apresentação"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export { TCC };
