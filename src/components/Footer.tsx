import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            name: 'Discord',
            handle: '@realrisingstar',
            icon: MessageCircle,
            href: 'https://discord.com/users/realrisingstar'
        },
        {
            name: 'Fiverr',
            handle: '@realrisingstar',
            icon: null,
            href: 'https://www.fiverr.com/realrisingstar'
        },
        {
            name: 'Behance',
            handle: 'surajsaroj29',
            icon: null,
            href: 'https://www.behance.net/surajsaroj29'
        },
        {
            name: 'Email',
            handle: 'risingstar8533@gmail.com',
            icon: Mail,
            href: 'mailto:risingstar8533@gmail.com'
        }
    ];

    return (
        <footer id="contact" className="bg-gradient-to-b from-[#0a0a0a] to-[#000000] text-white py-16 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

                    {/* Left: Branding */}
                    <div>
                        <h3 className="font-['Syne'] font-bold text-3xl md:text-4xl mb-4">
                            RISING<span className="text-gray-500">STAR</span>.
                        </h3>
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            Crafting eye-catching designs that stop the scroll. From concept to magic—let's create visuals that captivate.
                        </p>
                    </div>

                    {/* Right: Contact Links */}
                    <div>
                        <h4 className="font-['Syne'] font-bold text-xl mb-6 uppercase tracking-wide">
                            Let's Connect
                        </h4>
                        <div className="space-y-3">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                    >
                                        {Icon && <Icon className="w-5 h-5" />}
                                        {!Icon && (
                                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                                                {link.name[0]}
                                            </div>
                                        )}
                                        <span className="font-medium">
                                            {link.name}: <span className="text-white/80 group-hover:text-white">{link.handle}</span>
                                        </span>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2026 Rising Star Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
