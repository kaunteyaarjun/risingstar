import React from 'react';
import { motion } from 'framer-motion';
import mehnatDark from '../assets/mehnat_dark.png';
import mehnatSunset from '../assets/mehnat_sunset.png';

const ProjectShowcase: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] text-white">
                        mehnat - <br className="md:hidden" />hardwork
                    </h2>
                    <div className="h-1 w-24 bg-white rounded-full mt-4" />
                </motion.div>

                {/* Image Showcases */}
                <div className="space-y-8 mb-16">
                    {/* Dark Version */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(79,70,229,0.4)] border border-white/10 group"
                    >
                        <img
                            src={mehnatDark}
                            alt="Hardwork - Dark Version"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Sunset Version */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(251,113,133,0.3)] border border-white/10 group"
                    >
                        <img
                            src={mehnatSunset}
                            alt="Mehnat - Sunset Version"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                </div>

                {/* Inspiration Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />

                    <h3 className="text-2xl md:text-3xl font-['Syne'] font-bold text-white mb-6 text-center uppercase tracking-wide">
                        Inspiration Behind "Mehnat – Hardwork"
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto text-lg">
                        "Mehnat – Hardwork" is a personal reminder of the value of dedication and perseverance. I created this artwork to inspire myself to keep pushing forward, even when things get tough. It symbolizes growth through effort and motivates me to stay committed to my goals, no matter the obstacles.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectShowcase;
