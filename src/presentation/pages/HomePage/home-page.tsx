import { useNavigate } from "react-router-dom";

import { CardWithIllustration } from "@/presentation/components";

import "./home-page.scss";
import { homePageCardsData } from "./home-page-utils";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="home-page">
      <h2 className="home-page__title">
        ¿Que puedes hacer con InfoJobs Tools?
      </h2>

      {homePageCardsData.map((data) => (
        <CardWithIllustration
          {...data}
          action={() => navigate(data.path)}
          key={data.path}
        />
      ))}
    </section>
  );
};
export default HomePage;
