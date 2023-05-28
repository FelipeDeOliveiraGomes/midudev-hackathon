import { useState, useEffect } from 'react';
import './animated-slide.scss';

type AnimatedSlideParams = {
    children: React.ReactNode;
    delay: number;
};

const AnimatedSlide: React.FC<AnimatedSlideParams> = ({ children, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`animated-slide ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default AnimatedSlide;
