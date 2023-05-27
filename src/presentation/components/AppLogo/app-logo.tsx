import InfojobsLogo from '@/presentation/assets/logos/infojobs-logo.svg';

import './app-logo.scss';

const AppLogo: React.FC = () => {
    return (
        <div className="app-logo">
            <InfojobsLogo />
            <span className="app-logo__tools-label">Tools</span>
        </div>
    );
};

export default AppLogo;
