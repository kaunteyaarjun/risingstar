import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import quoteBanner from '../assets/quote_banner.png';

const QuoteBanner: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={quoteBanner}
                    alt="Every client brief is a story waiting to be told"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </motion.div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-['Syne'] font-bold text-white leading-tight"
                >
                    "Every client brief is a story waiting to be told."
                </motion.p>
            </div>
        </div>
    );
};

export default QuoteBanner;
