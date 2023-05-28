import { AnimatedSlide, Button } from '@/presentation/components';
import useSessionStorage from '@/presentation/hooks/useSessionStorage';

import './curriculum-analiser.scss';
import { cvScopes, generateInfojobsAuthUrl } from './curriculum-analiser-utils';

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
                                Para utilizar esta feature tienes que estar
                                autenticad@
                            </span>
                            <Button onClick={redirectToAuth}>
                                Iniciar sesión con InfoJobs
                            </Button>
                        </div>
                    </AnimatedSlide>
                </div>
            ) : (
                <div className="curriculum-analiser-page__inner-container">
                    <AnimatedSlide delay={100}>
                        <div className="curriculum-analiser-page__chat-window">
                            <header className="curriculum-analiser-page__header">
                                <h2>Analisis De Curriculum</h2>
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
