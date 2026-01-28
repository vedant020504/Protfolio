"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/5 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="text-2xl font-display font-bold text-gradient mb-2">Vedant Singh</h2>
                    <p className="text-white/40 text-sm">Building smart solutions with clean code.</p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-white/40">
                    {["Home", "About", "Skills", "Projects", "Experience"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors uppercase tracking-widest">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="text-right">
                    <p className="text-white/40 text-sm flex items-center justify-center md:justify-end gap-1.5">
                        Designed & Built with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}><Heart className="w-4 h-4 text-red-500 fill-red-500" /></motion.span> by Vedant
                    </p>
                    <p className="text-white/20 text-xs mt-1">© 2026 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
