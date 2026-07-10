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
      "O começo de uma jornada que ainda tinha muitos capítulos pela frente.",
    size: "wide",
  },
  {
    id: "portrait-2018",
    src: portrait2018,
    alt: "Retrato de Iasmin em 2018",
    caption: "2018, quando tudo ainda estava começando.",
    size: "tall",
  },
  {
    id: "sister-2018",
    src: sister2018,
    alt: "Iasmin ao lado de sua irmã em 2018",
    caption: "Com quem sempre esteve ao meu lado.",
    size: "wide",
  },
  {
    id: "first-unip-visit",
    src: firstUnipVisit,
    alt: "Primeira visita de Iasmin à UNIP, em 2021",
    caption: "A primeira vez na faculdade que faria parte da minha história.",
    size: "default",
  },
  {
    id: "brcondos-team",
    src: brcondosTeam,
    alt: "Iasmin com a equipe da BRCondos",
    caption:
      "A equipe da BRCondos e uma das primeiras etapas da minha trajetória profissional.",
    size: "wide",
  },
  {
    id: "brcondos-event",
    src: brcondosEvent,
    alt: "Iasmin durante um evento da BRCondos",
    caption: "Um dos momentos vividos durante minha passagem pela BRCondos.",
    size: "tall",
  },
  {
    id: "gofix-team",
    src: gofixTeam,
    alt: "Iasmin com a equipe da GoFix",
    caption: "A equipe da GoFix, parte importante da minha caminhada.",
    size: "wide",
  },
  {
    id: "acti-experience",
    src: actiExperience,
    alt: "Iasmin durante sua experiência profissional na ACTi",
    caption: "Na ACTi, vivendo minha primeira experiência como desenvolvedora.",
    size: "tall",
  },
  {
    id: "college",
    src: college,
    alt: "Iasmin durante sua graduação em Ciência da Computação",
    caption: "Entre aulas, projetos, provas e muitos aprendizados.",
    size: "tall",
  },
  {
    id: "late-college-night",
    src: lateCollegeNight,
    alt: "Iasmin chegando da faculdade à meia-noite",
    caption: "As noites longas também fizeram parte da conquista.",
    size: "default",
  },
  {
    id: "adyen-onboarding",
    src: adyenOnboarding,
    alt: "Iasmin no dia de seu onboarding na Adyen",
    caption: "O primeiro dia de uma nova e enorme etapa.",
    size: "tall",
  },
  {
    id: "adyen-volunteering",
    src: adyenVolunteering,
    alt: "Iasmin participando de uma ação de voluntariado na Adyen",
    caption: "Tecnologia, pessoas e propósito.",
    size: "wide",
  },
  {
    id: "adyen-desk",
    src: adyenDesk,
    alt: "Mesa de trabalho de Iasmin na Adyen",
    caption: "O lugar onde muitos desafios se transformaram em aprendizado.",
    size: "tall",
  },
  {
    id: "adyen-first-presentation",
    src: adyenFirstPresentation,
    alt: "Iasmin realizando sua primeira apresentação como estagiária na Adyen em 2024",
    caption: "Minha primeira apresentação como estagiária, em 2024.",
    size: "tall",
  },
  {
    id: "adyen-english-presentation",
    src: adyenEnglishPresentation,
    alt: "Iasmin realizando sozinha uma apresentação em inglês na Adyen em 2025",
    caption: "Em 2025, apresentando sozinha e em inglês.",
    size: "tall",
  },
  {
    id: "tcc-group",
    src: tccGroup,
    alt: "Iasmin com seu grupo do trabalho de conclusão de curso",
    caption: "O grupo que transformou uma ideia em projeto final.",
    size: "wide",
  },
  {
    id: "tcc-presentation-day",
    src: tccPresentationDay,
    alt: "Iasmin no dia da apresentação de seu trabalho de conclusão de curso",
    caption: "O dia de apresentar tudo o que construímos.",
    size: "tall",
  },
  {
    id: "bound-tcc",
    src: boundTcc,
    alt: "Trabalho de conclusão de curso encadernado",
    caption: "O projeto final, agora impresso e eternizado.",
    size: "tall",
  },
  {
    id: "sister-promotion-celebration",
    src: sisterPromotionCelebration,
    alt: "Iasmin recebendo flores de sua irmã no dia em que foi efetivada",
    caption: "No dia da efetivação, minha irmã foi me buscar com flores.",
    size: "default",
  },
  {
    id: "promotion-with-parents",
    src: promotionWithParents,
    alt: "Iasmin contando aos pais que havia sido efetivada",
    caption: "O momento em que contei aos meus pais que havia sido efetivada.",
    size: "default",
  },
  {
    id: "amsterdam-trip",
    src: amsterdamTrip,
    alt: "Iasmin durante sua primeira viagem internacional a trabalho em Amsterdam",
    caption: "Minha primeira viagem internacional a trabalho, em Amsterdam.",
    size: "tall",
  },
  {
    id: "current-team",
    src: currentTeam,
    alt: "Iasmin com seu time atual na Adyen",
    caption: "Meu time atual e o capítulo que continuo construindo.",
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
