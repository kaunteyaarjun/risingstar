import React from 'react';
import { motion } from 'framer-motion';
import celestial from '../assets/celestial.png';
import logos from '../assets/logos.png';

const MyArtwork: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/10 group relative"
            >
                <img src={celestial} alt="Celestial Artwork" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-['Syne'] font-bold text-white">Celestial</h3>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/10 group relative"
            >
                <img src={logos} alt="Logo Collection" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-['Syne'] font-bold text-white">Logos</h3>
                </div>
            </motion.div>
        </div>
    );
};

export default MyArtwork;
