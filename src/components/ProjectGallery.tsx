import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import MockupsAndPosters from './MockupsAndPosters';
import BannerShowcase from './BannerShowcase';
import MyArtwork from './MyArtwork';

const ProjectGallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="work" className="py-24 px-6 bg-[#0a0a0a] relative z-20">
            <div ref={containerRef} className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] mb-4 text-white">Selected <br /> Works</h2>
                        <div className="h-1 w-24 bg-white rounded-full" />
                    </div>
                    <div className="text-right">
                        <p className="max-w-xs text-gray-400 ml-auto leading-relaxed">
                            A comprehensive showcase of every material, blending illustration, branding, and digital environments.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-24">
                    <MyArtwork />
                    <MockupsAndPosters />
                    <BannerShowcase />
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
