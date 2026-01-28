import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const navBackground = useTransform(
        scrollY,
        [0, 50],
        ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']
    );
    const backdropBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);

    return (
        <motion.nav
            style={{ backgroundColor: navBackground, backdropFilter: backdropBlur, WebkitBackdropFilter: backdropBlur }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 transition-colors duration-500"
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <a href="#" className="font-['Syne'] font-bold text-2xl tracking-tighter mix-blend-difference z-50 text-white">
                    RISING<span className="text-gray-500">STAR</span>.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {['Work', 'About', 'Expertise', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="https://www.behance.net/surajsaroj29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-transform active:scale-95"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 bg-[#0a0a0a] flex flex-col justify-center items-center gap-8 md:hidden text-white h-screen"
                        >
                            {['Work', 'About', 'Expertise', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="font-['Syne'] text-4xl font-bold hover:text-gray-500 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
