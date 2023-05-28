import { useEffect, useState } from 'react';

import './typing-animated-text.scss';

type TypingAnimatedTextParams = {
    text: string;
    typingSpeed: number;
};

const TypingAnimatedText: React.FC<TypingAnimatedTextParams> = ({
    text,
    typingSpeed,
}) => {
    const [renderedText, setRenderedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const typeText = () => {
            if (charIndex < text.length) {
                setTimeout(() => {
                    setRenderedText(renderedText + text.charAt(charIndex));
                    setCharIndex(charIndex + 1);
                }, typingSpeed);
            } else {
                setIsTyping(false);
            }
        };

        typeText();
    }, [renderedText, charIndex]);

    return (
        <div className="typing-animated-text">
            <span
                className={`typing-animated-text__text ${
                    isTyping ? 'typing-animated-text__text--typing' : ''
                }`}
            >
                {renderedText}
            </span>
        </div>
    );
};

export default TypingAnimatedText;
