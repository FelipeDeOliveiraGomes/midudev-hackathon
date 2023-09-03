import './button.scss';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
    disabled,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`app-button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
