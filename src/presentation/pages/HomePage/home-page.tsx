import { useNavigate } from 'react-router-dom';

import { AnimatedSlide } from '@/presentation/components/helpers';
import { CardWithIllustration } from '@/presentation/components/molecules';

import { homePageCardsData } from './home-page-utils';
import { TranslationsKeys, useTranslate } from '@/presentation/content/hooks';

import './home-page.scss';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const translate = useTranslate();

    return (
        <section className="home-page">
            <h2 className="home-page__title">
                {translate('app.home_page.title')}
            </h2>

            {homePageCardsData.map((data) => (
                <div key={data.path}>
                    <AnimatedSlide delay={data.delay}>
                        <CardWithIllustration
                            {...data}
                            children={translate(
                                data.children as TranslationsKeys
                            )}
                            title={translate(data.title as TranslationsKeys)}
                            callToAction={translate(
                                data.callToAction as TranslationsKeys
                            )}
                            action={() => navigate(data.path)}
                        />
                    </AnimatedSlide>
                </div>
            ))}
        </section>
    );
};

export default HomePage;
