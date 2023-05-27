import './button.scss';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
}) => {
    return (
        <button onClick={onClick} className={`app-button ${className}`}>
            {children}
        </button>
    );
};

export default Button;
