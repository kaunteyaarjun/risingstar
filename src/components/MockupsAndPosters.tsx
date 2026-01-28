import React from 'react';
import { motion } from 'framer-motion';
import posterNike from '../assets/poster_nike.png';
import posterJbl from '../assets/poster_jbl.png';
import posterFast9Full from '../assets/poster_fast9_full.jpg';
import posterTenx from '../assets/poster_tenx.png';
import shirt1 from '../assets/mockup_shirt_1.png';
import shirt2 from '../assets/mockup_shirt_2.png';
import posterBlue from '../assets/poster_blue.png';

const MockupsAndPosters: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
            {/* Huge Gradient Title */}
            <div className="flex justify-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[12vw] md:text-[8rem] font-black leading-[0.8] text-center font-['Syne'] uppercase tracking-tighter"
                >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#4a8aff] to-[#a855f7]">
                        MOCKUPS
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#4a8aff] to-[#a855f7] relative -mt-2 md:-mt-8">
                        <span className="text-[#ff4d4d] text-[0.5em] align-top absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-serif italic">&</span>
                        POSTERS
                    </span>
                </motion.h2>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

                {/* Column 1 (Left) */}
                <div className="flex flex-col gap-8">
                    {/* Shirt 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group"
                    >
                        <img src={shirt1} alt="Spider Mockup" className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500" />
                    </motion.div>

                    {/* Fast 9 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group flex items-center justify-center p-2"
                    >
                        <img src={posterFast9Full} alt="Fast 9 Poster" className="w-full h-full object-contain drop-shadow-2xl" />
                    </motion.div>

                    {/* JBL */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group p-8 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-black"
                    >
                        <img src={posterJbl} alt="JBL Head Truth" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                </div>

                {/* Column 2 (Right) */}
                <div className="flex flex-col gap-8">
                    {/* Shirt 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group"
                    >
                        <img src={shirt2} alt="Shiva Mockup" className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500" />
                    </motion.div>

                    {/* Nike */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group p-8 flex items-center justify-center bg-gradient-to-br from-[#1a0b0b] to-black"
                    >
                        <img src={posterNike} alt="Nike We Fly" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                    </motion.div>

                    {/* TenX */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group"
                    >
                        <img src={posterTenx} alt="TenX" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                    </motion.div>

                    {/* Shadow Force (Shivace) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative group"
                    >
                        <img src={posterBlue} alt="Shadow Force" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default MockupsAndPosters;
