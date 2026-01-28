import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Image, FileText, Palette, Grid, Zap } from 'lucide-react';
import MagicBento from './MagicBento';

const Services: React.FC = () => {
    const services = [
        {
            icon: Image,
            title: "Thumbnails",
            description: "Eye-catching YouTube thumbnails that boost click-through rates",
            label: "Design",
            color: "#1a1a1a"
        },
        {
            icon: FileText,
            title: "Poster Design",
            description: "Bold, creative posters for movies, music, and events",
            label: "Creative",
            color: "#1a1a1a"
        },
        {
            icon: Palette,
            title: "Brand Identity",
            description: "Unique logos and visual identities that stand out",
            label: "Branding",
            color: "#1a1a1a"
        },
        {
            icon: Grid,
            title: "Banner Design",
            description: "Professional banners for social media and advertising",
            label: "Marketing",
            color: "#1a1a1a"
        },
        {
            icon: Layers,
            title: "Mockups",
            description: "Product mockups and visual presentations",
            label: "3D",
            color: "#1a1a1a"
        },
        {
            icon: Zap,
            title: "Flyer Design",
            description: "Dynamic flyers that grab attention and drive action",
            label: "Print",
            color: "#1a1a1a"
        }
    ];

    return (
        <section id="expertise" className="py-24 px-6 bg-[#0a0a0a] relative">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] text-white mb-4">
                        Expertise
                    </h2>
                    <div className="h-1 w-24 bg-white rounded-full" />
                </motion.div>

                {/* Magic Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <MagicBento
                        cards={services}
                        textAutoHide={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        spotlightRadius={350}
                        glowColor="214, 52, 71"
                        clickEffect={true}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
