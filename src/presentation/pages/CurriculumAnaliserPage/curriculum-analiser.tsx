import { Button } from '@/presentation/components/atoms';
import { AnimatedSlide } from '@/presentation/components/helpers';

import useSessionStorage from '@/store/hooks/useSessionStorage';

import { cvScopes, generateInfojobsAuthUrl } from './curriculum-analiser-utils';
import { translate } from '@/presentation/content/helpers';

import './curriculum-analiser.scss';

const CurriculumAnaliserPage: React.FC = () => {
    const [oauthToken, setOauthToken] = useSessionStorage({
        initialValue: '',
        key: 'user-oauth-token',
    });

    const redirectToAuth = () => {
        const url = generateInfojobsAuthUrl(cvScopes, 'curriculum-analiser');
        document.location.href = url;
    };

    return (
        <section className="curriculum-analiser-page">
            {!oauthToken ? (
                <div className="curriculum-analiser-page__auth-container">
                    <AnimatedSlide delay={100}>
                        <div className="curriculum-analiser-page__login-card">
                            <span>
                                {translate(
                                    'app.curriculum_analiser_page.auth_message'
                                )}
                            </span>
                            <Button onClick={redirectToAuth}>
                                {translate(
                                    'app.curriculum_analiser_page.infojobs_login'
                                )}
                            </Button>
                        </div>
                    </AnimatedSlide>
                </div>
            ) : (
                <div className="curriculum-analiser-page__inner-container">
                    <AnimatedSlide delay={100}>
                        <div className="curriculum-analiser-page__chat-window">
                            <header className="curriculum-analiser-page__header">
                                <h2>
                                    {translate(
                                        'app.curriculum_analiser_page.title'
                                    )}
                                </h2>
                            </header>

                            <div className="curriculum-analiser-page__chat"></div>
                        </div>
                    </AnimatedSlide>
                </div>
            )}
        </section>
    );
};

export default CurriculumAnaliserPage;
