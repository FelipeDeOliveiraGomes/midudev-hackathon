import './animated-check.scss';

const AnimatedCheck: React.FC = () => {
    return (
        <div className="animated-check">
            <svg
                className="animated-check__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    className="animated-check__circle"
                />
                <path
                    className="animated-check__check"
                    fill="none"
                    d="M5,12 L10,17 L20,7"
                />
            </svg>
        </div>
    );
};

export default AnimatedCheck;
