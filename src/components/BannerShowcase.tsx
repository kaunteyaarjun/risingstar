import React from 'react';
import { motion } from 'framer-motion';
import bannerKaze from '../assets/banner_kaze.png';
import bannerN1 from '../assets/banner_n1.png';
import bannerRisingGold from '../assets/banner_rising_gold.png';
import bannerRisingTeal from '../assets/banner_rising_teal.png';

const BannerShowcase: React.FC = () => {
    return (
        <div className="w-full">
            {/* Huge Gradient Title */}
            <div className="flex justify-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10vw] md:text-[7rem] font-black leading-[0.8] text-center font-['Syne'] uppercase tracking-tighter"
                >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#4a8aff] to-[#a855f7]">
                        BANNERS
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#4a8aff] to-[#a855f7] relative -mt-2 md:-mt-8">
                        <span className="text-[#ff4d4d] text-[0.5em] align-top absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-serif italic">&</span>
                        THUMBNAILS
                    </span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-white/10 group relative"
                >
                    <img src={bannerKaze} alt="Kaze Banner" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-white/10 group relative"
                >
                    <img src={bannerN1} alt="N1 Banner" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-white/10 group relative"
                >
                    <img src={bannerRisingGold} alt="Rising Gold Banner" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-white/10 group relative"
                >
                    <img src={bannerRisingTeal} alt="100 Rising Teal Banner" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </motion.div>
            </div>
        </div>
    );
};

export default BannerShowcase;
