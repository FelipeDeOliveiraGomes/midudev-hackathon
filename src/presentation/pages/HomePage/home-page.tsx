import { useNavigate } from 'react-router-dom';

import { AnimatedSlide } from '@/presentation/components/helpers';
import { CardWithIllustration } from '@/presentation/components/molecules';

import { homePageCardsData } from './home-page-utils';

import './home-page.scss';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="home-page">
            <h2 className="home-page__title">
                ¿Que puedes hacer con InfoJobs Tools?
            </h2>

            {homePageCardsData.map((data) => (
                <div key={data.path}>
                    <AnimatedSlide delay={data.delay}>
                        <CardWithIllustration
                            {...data}
                            action={() => navigate(data.path)}
                        />
                    </AnimatedSlide>
                </div>
            ))}
        </section>
    );
};

export default HomePage;
