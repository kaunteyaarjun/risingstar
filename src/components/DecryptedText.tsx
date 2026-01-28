import { useState, useEffect } from "react";


const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

interface DecryptedTextProps {
    text: string;
    className?: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        let pos = 0;

        interval = setInterval(() => {
            const scrambled = text.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");

            setDisplayText(scrambled);
            pos++;

            if (pos >= text.length * CYCLES_PER_LETTER) {
                clearInterval(interval);
            }
        }, SHUFFLE_TIME);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

export default DecryptedText;
