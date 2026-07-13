import journeyStart2018 from "../../assets/gallery/01-inicio-da-jornada-2018.jpeg";
import portrait2018 from "../../assets/gallery/02-retrato-2018.jpeg";
import sister2018 from "../../assets/gallery/03-com-minha-irma-2018.jpeg";
import firstUnipVisit from "../../assets/gallery/04-primeira-visita-unip-2021.jpeg";
import brcondosTeam from "../../assets/gallery/05-equipe-brcondos.jpeg";
import brcondosEvent from "../../assets/gallery/06-evento-brcondos.jpeg";
import gofixTeam from "../../assets/gallery/07-equipe-gofix.jpeg";
import actiExperience from "../../assets/gallery/08-experiencia-acti.jpeg";
import college from "../../assets/gallery/09-faculdade.jpeg";
import lateCollegeNight from "../../assets/gallery/10-chegando-da-faculdade-meia-noite.jpeg";
import adyenOnboarding from "../../assets/gallery/11-onboarding-adyen.jpeg";
import adyenVolunteering from "../../assets/gallery/12-voluntariado-adyen.jpeg";
import adyenDesk from "../../assets/gallery/13-mesa-de-trabalho-adyen.jpeg";
import adyenFirstPresentation from "../../assets/gallery/14-primeira-apresentacao-adyen-2024.jpeg";
import adyenEnglishPresentation from "../../assets/gallery/15-apresentacao-em-ingles-adyen-2025.jpeg";
import tccGroup from "../../assets/gallery/16-grupo-do-tcc.jpeg";
import tccPresentationDay from "../../assets/gallery/17-dia-da-apresentacao-do-tcc.jpeg";
import boundTcc from "../../assets/gallery/18-tcc-encadernado.jpeg";
import sisterPromotionCelebration from "../../assets/gallery/19-comemoracao-da-efetivacao-com-minha-irma.jpeg";
import promotionWithParents from "../../assets/gallery/20-efetivacao-com-meus-pais.jpeg";
import amsterdamTrip from "../../assets/gallery/21-viagem-amsterdam-2026.jpeg";
import currentTeam from "../../assets/gallery/22-time-atual-adyen.jpeg";
import family from "../../assets/gallery/23-familia.jpeg";

export type GalleryItemSize = "default" | "wide" | "tall";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  size: GalleryItemSize;
  objectPosition?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "journey-start-2018",
    src: journeyStart2018,
    alt: "Iasmin no início de sua jornada em tecnologia, em 2018",
    caption:
      "Mini Iasmin no ensino fundamental, com esse cabelo tenebroso e sem saber que hoje seríamos bacharel em ciência da computação e engenheira de software em uma empresa global de pagamentos :O",
    size: "wide",
  },
  {
    id: "portrait-2018",
    src: portrait2018,
    alt: "Retrato de Iasmin em 2018",
    caption: "Mini Iasmin em 2018, no início do técnico em informática!",
    size: "tall",
  },
  {
    id: "sister-2018",
    src: sister2018,
    alt: "Iasmin ao lado de sua irmã em 2018",
    caption: "Ainda em 2018, com quem sempre esteve ao meu lado <3",
    size: "wide",
  },
  {
    id: "first-unip-visit",
    src: firstUnipVisit,
    alt: "Primeira visita de Iasmin à UNIP, em 2021",
    caption: "Minha primeira visita à faculdade, em 2021!",
    size: "default",
  },
  {
    id: "brcondos-team",
    src: brcondosTeam,
    alt: "Iasmin com a equipe da BRCondos",
    caption:
      "A equipe BRCondos, que lembro sempre com muito carinho.",
    size: "wide",
  },
  {
    id: "brcondos-event",
    src: brcondosEvent,
    alt: "Iasmin durante um evento da BRCondos",
    caption: "Um dos eventos que participei com a BRCondos, mais uma conquista profissional e pessoal!",
    size: "tall",
  },
  {
    id: "gofix-team",
    src: gofixTeam,
    alt: "Iasmin com a equipe da GoFix",
    caption: "Equipe GoFix, passamos pouco tempo juntos, mas aprendi demais com eles.",
    size: "wide",
  },
  {
    id: "acti-experience",
    src: actiExperience,
    alt: "Iasmin durante sua experiência profissional na ACTi",
    caption: "Na ACTi vivendo minha primeira experiência como desenvolvedora <3",
    size: "tall",
  },
  {
    id: "college",
    src: college,
    alt: "Iasmin durante sua graduação em Ciência da Computação",
    caption: "Mais uma noite na faculdade entre aulas, projetos, trabalhos e muitos aprendizados.",
    size: "tall",
  },
  {
    id: "late-college-night",
    src: lateCollegeNight,
    alt: "Iasmin chegando da faculdade à meia-noite",
    caption: "Chegar tarde da faculdade depois de dias longos de trabalho! O privilégio de estar cansada por estar contruindo a vida que sonho e mereço.",
    size: "default",
  },
  {
    id: "adyen-onboarding",
    src: adyenOnboarding,
    alt: "Iasmin no dia de seu onboarding na Adyen",
    caption: "O primeiro dia de uma nova e enorme etapa!",
    size: "tall",
  },
  {
    id: "adyen-volunteering",
    src: adyenVolunteering,
    alt: "Iasmin participando de uma ação de voluntariado na Adyen",
    caption: "O lugar que me permite impactar pessoas <3 Um dos dias de voluntariado.",
    size: "wide",
  },
  {
    id: "adyen-desk",
    src: adyenDesk,
    alt: "Mesa de trabalho de Iasmin na Adyen",
    caption: "O cantinho que me permite causar impactos globais na empresa dos meus sonhos!",
    size: "tall",
  },
  {
    id: "adyen-first-presentation",
    src: adyenFirstPresentation,
    alt: "Iasmin realizando sua primeira apresentação como estagiária na Adyen em 2024",
    caption: "Minha primeira apresentação como estagiária, em 2024. 5 minutos de uma apresentação em inglês - mais um ato de coragem <3",
    size: "tall",
  },
  {
    id: "adyen-english-presentation",
    src: adyenEnglishPresentation,
    alt: "Iasmin realizando sozinha uma apresentação em inglês na Adyen em 2025",
    caption: "E em 2025 apresentando sozinha em inglês por 30+ minutos, para todo o escritório com engenheiros que admiro, e alguns de outros países conectados online. Win!!!",
    size: "tall",
  },
  {
    id: "tcc-group",
    src: tccGroup,
    alt: "Iasmin com seu grupo do trabalho de conclusão de curso",
    caption: "O grupo do TCC que transformou uma ideia em um projeto real. Além de representante de turma durante todo o curso, fui líder do grupo de TCC (é meu jeitinho)",
    size: "wide",
  },
  {
    id: "tcc-presentation-day",
    src: tccPresentationDay,
    alt: "Iasmin no dia da apresentação de seu trabalho de conclusão de curso",
    caption: "O dia de apresentar tudo o que construímos, sempre com o apoio da minha família!!",
    size: "tall",
  },
  {
    id: "bound-tcc",
    src: boundTcc,
    alt: "Trabalho de conclusão de curso encadernado",
    caption: "TCC final, encadernado e eternizado. Aprovados com 9,5! Para honra e glória de Deus!!!",
    size: "tall",
  },
  {
    id: "sister-promotion-celebration",
    src: sisterPromotionCelebration,
    alt: "Iasmin recebendo flores de sua irmã no dia em que foi efetivada",
    caption: "O processo de efetivação foi acompanhado de muita concentração e oração. No dia que recebi a notícia, a Di, que acompanhou cada momento, foi me buscar com flores!",
    size: "default",
  },
  {
    id: "promotion-with-parents",
    src: promotionWithParents,
    alt: "Iasmin contando aos pais que havia sido efetivada",
    caption: "E o momento em que contei aos meus pais e a Belle que seria efetivada! Eles que sempre me apoiaram e acreditaram em mim. O momento mais emocionante da minha vida até aqui. <3",
    size: "default",
  },
  {
    id: "amsterdam-trip",
    src: amsterdamTrip,
    alt: "Iasmin durante sua primeira viagem internacional a trabalho em Amsterdam",
    caption: "Em junho desse ano, fiz minha primeira viagem internacional a trabalho pra Holanda!",
    size: "tall",
  },
  {
    id: "current-team",
    src: currentTeam,
    alt: "Iasmin com seu time atual na Adyen",
    caption: "Meu time atual no evento da empresa em Amsterdam, e o capítulo que continuo construindo.",
    size: "wide",
  },
  {
    id: "family",
    src: family,
    alt: "Iasmin reunida com sua família em um momento de celebração",
    caption:
      "O motivo de tudo. Minha base, a prova do cuidado de Deus na minha vida e a certeza de que nada faria sentido sem eles.",
    size: "wide",
  },
];
