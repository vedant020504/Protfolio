"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300",
                scrolled ? "top-2" : "top-0"
            )}
        >
            <div className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300",
                scrolled ? "glass shadow-lg" : "bg-transparent"
            )}>
                <Link href="/" className="text-xl font-display font-bold text-gradient mr-4">
                    VS
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <a 
                    href="https://drive.google.com/file/d/1U6DPeyg6eY9E6q-vhDkRRij3DSv8-KKQ/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                    Resume
                </a>
            </div>
        </motion.nav>
    );
};
