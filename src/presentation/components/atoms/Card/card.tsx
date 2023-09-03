import './card.scss';

type Props = {
    children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
    return <section className="card">{children}</section>;
};

export default Card;
