import { AppLogo } from '@/presentation/components/atoms';

import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <AppLogo />
        </footer>
    );
};

export default Footer;
