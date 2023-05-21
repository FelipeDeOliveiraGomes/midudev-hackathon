import { CardWithIllustration } from "@/presentation/components";

import DoubtsIllustration from "@/presentation/assets/illustrations/Night.svg";
import RobotIllustration from "@/presentation/assets/illustrations/robot-finding-data.svg";
import CvAnalisisIllustration from "@/presentation/assets/illustrations/Empty Not found CV.svg";

import "./home-page.scss";

const HomePage: React.FC = () => {
  return (
    <section className="home-page">
      <h2 className="home-page__title">
        ¿Que puedes hacer con InfoJobs Tools?
      </h2>

      <CardWithIllustration
        backgroundColor="soft-blue"
        illustration={<DoubtsIllustration />}
        title="Analiticas Avanzadas"
        callToAction="Ir para Analiticas"
      >
        ¿Te encuentras perdido en el mercado laboral? Con nuestras analiticas
        avanzadas, podras saber todo sobre el mercado de trabajo. Informaciones
        reales, basadas en las ofertas publicadas en InfoJobs.
      </CardWithIllustration>

      <CardWithIllustration
        backgroundColor="soft-yellow"
        illustration={<RobotIllustration />}
        direction="to-left"
        title="Job Assistant"
        callToAction="Ir para Job Assistant"
      >
        ¡Deja de perder el tiempo buscando ofertas manualmente! Nuestro Job
        Assistant te enviará un reporte diário con todas las ofertas que se
        adapten a tu perfil.
      </CardWithIllustration>

      <CardWithIllustration
        backgroundColor="soft-green"
        illustration={<CvAnalisisIllustration />}
        title="Analise avanzado de curriculum"
        callToAction="Ir para Analise de curriculum"
      >
        ¿No estas seguro cuanto a tu curriculum? Nuestra Avanzada analise de
        curriculum por I.A. te ayudará a polirlo.
      </CardWithIllustration>
    </section>
  );
};
export default HomePage;
