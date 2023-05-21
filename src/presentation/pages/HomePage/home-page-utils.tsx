import { CardWithIllustrationParams } from "@/presentation/components/CardWithIllustration/card-with-illustration-types";

import DoubtsIllustration from "@/presentation/assets/illustrations/Night.svg";
import RobotIllustration from "@/presentation/assets/illustrations/robot-finding-data.svg";
import CvAnalisisIllustration from "@/presentation/assets/illustrations/Empty Not found CV.svg";

import { routesRecord } from "@/presentation/router/routes-record";

type HomePageCardsDataType = {
  path: string;
} & CardWithIllustrationParams;

export const homePageCardsData: HomePageCardsDataType[] = [
  {
    backgroundColor: "soft-blue",
    illustration: <DoubtsIllustration />,
    title: "Analiticas Avanzadas",
    callToAction: "Ir para Analiticas",
    path: routesRecord.ANALYTICS,
    children:
      "¿Te encuentras perdido en el mercado laboral? Con nuestras analiticas avanzadas, podras saber todo sobre el mercado de trabajo. Informaciones reales, basadas en las ofertas publicadas en InfoJobs.",
  },
  {
    backgroundColor: "soft-yellow",
    illustration: <RobotIllustration />,
    title: "Job Assistant",
    direction: "to-left",
    callToAction: "Ir para Job Assistant",
    path: routesRecord.JOB_ASSISTANT,
    children:
      "¡Deja de perder el tiempo buscando ofertas manualmente! Nuestro Job Assistant te enviará un reporte diário con todas las ofertas que se adapten a tu perfil.",
  },
  {
    backgroundColor: "soft-green",
    illustration: <CvAnalisisIllustration />,
    title: "Analisis avanzado de curriculum por I.A.",
    callToAction: "Ir para Analisis de curriculum",
    path: routesRecord.CURRICULUM_ANALISER,
    children:
      "¿No estas seguro cuanto a tu curriculum? ¡Nuestra Avanzada analise de curriculum por inteligencia artificial te ayudará a polirlo!",
  },
];
