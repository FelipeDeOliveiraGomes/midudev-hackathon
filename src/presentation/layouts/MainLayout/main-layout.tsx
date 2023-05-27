import { Footer, Header } from '../../components';

import './main-layout.scss';

type Props = {
    children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="main-layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
