import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Title with mixed typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        The <span className="font-['Great_Vibes'] text-5xl md:text-7xl font-normal italic">"Hand-Drawn"</span>
                        <br />
                        <span className="font-['Syne']">Digital Experience</span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-4"
                >
                    I believe in the imperfection of the human touch. Even in a digital world,
                    the soul of a brand lives in its rough edges and unique strokes. My work
                    bridges the gap between{' '}
                    <span className="text-white font-semibold">sketchbook raw emotion</span> and{' '}
                    <span className="text-white font-semibold">pixel-perfect functional design</span>.
                </motion.p>

                {/* Stats Grid */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { label: 'EXPERIENCE', value: '4+ Years' },
                        { label: 'PROJECTS', value: '50+' },
                        { label: 'STYLE', value: 'Abstract' },
                        { label: 'LOCATION', value: 'UP, India' }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="bg-[#1a1a1a]/50 backdrop-blur-sm px-6 py-10 md:px-12 md:py-12 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-[#1a1a1a]/80 min-h-[160px] md:min-h-[180px] flex flex-col justify-center items-center text-center"
                        >
                            <div className="text-lg md:text-3xl font-['Syne'] font-bold mb-3 md:mb-4 text-white leading-none">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium whitespace-nowrap">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
