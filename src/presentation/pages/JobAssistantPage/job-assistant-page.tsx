import { AnimatedSlide, TypingAnimatedText } from '@/presentation/components';
import './job-assistant-page.scss';

const JobAssistantPage: React.FC = () => {
    return (
        <section className="job-assistant-page">
            <div className="job-assistant-page__inner-container">
                <header className="job-assistant-page__header">
                    <TypingAnimatedText
                        text="Bienvenid@ al Job Assistant de infoJobs tools"
                        typingSpeed={80}
                    />
                </header>

                <AnimatedSlide delay={4000}>
                    <form className="job-assistant-page__form">test</form>
                </AnimatedSlide>
            </div>
        </section>
    );
};

export default JobAssistantPage;
