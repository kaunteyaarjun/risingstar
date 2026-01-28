import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import behanceImage from '../assets/behance.webp';
import SplitText from './SplitText';
import Beams from './Beams';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
            {/* Beams Background - Full Screen */}
            <div className="fixed inset-0 opacity-30 z-0 pointer-events-none">
                <Beams
                    beamWidth={2.5}
                    beamHeight={25}
                    beamNumber={12}
                    lightColor="#d63447"
                    speed={1.2}
                    noiseIntensity={1.5}
                    scale={0.18}
                    rotation={15}
                />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">

                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h2 className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-gray-400 mb-4">
                            Thumbnail & Graphic Designer
                        </h2>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Syne'] leading-[0.9] tracking-tighter text-white">
                            <SplitText
                                text="VISUAL"
                                tag="span"
                                className="inline-block"
                                delay={80}
                                duration={1}
                                ease="power3.out"
                                from={{ opacity: 0, y: 60 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.5}
                            /> <br />
                            <span className="text-stroke-1 text-transparent hover:text-white transition-colors duration-500 cursor-default">
                                ALCHEMIST
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed"
                    >
                        Crafting eye-catching thumbnails, dynamic flyers, and bold graphics that stop the scroll. From concept to magic—let's create visuals that captivate.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex items-center gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 group"
                        >
                            View Projects
                            <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-full font-medium border border-gray-600 text-white hover:border-white transition-colors"
                        >
                            Contact Me
                        </button>
                    </motion.div>
                </div>

                {/* Visual / Image */}
                <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
                    {/* Abstract Shapes or Cropped Illustration */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full h-full max-w-md"
                    >
                        {/* Main Image Masked */}
                        <a
                            href="https://www.behance.net/gallery/227035807/Graphic-design-Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out cursor-pointer block"
                        >
                            <img
                                src={behanceImage}
                                alt="Featured Artwork"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[1.5s]"
                                style={{ objectPosition: 'center 20%' }} // Focus on a top section
                            />
                        </a>

                        {/* Floating "Badge" or Detail */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-[#1a1a1a] p-6 rounded-2xl shadow-xl max-w-[200px] z-20 border border-white/10"
                        >
                            <p className="font-['Syne'] font-bold text-lg leading-tight text-white">Hand-Drawn Excellence</p>
                            <p className="text-xs text-gray-400 mt-2">100% Original Assets</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
