"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Smartphone, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = ["Software Developer", "Android Developer", "CS Student", "Tech Enthusiast"];

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:30px_30px] -z-20 opacity-30" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <span className="px-4 py-2 rounded-full border border-white/10 glass text-xs font-semibold tracking-widest text-secondary uppercase mb-6 inline-block">
                        Welcome to my universe
                    </span>

                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
                        Hi, I&apos;m <span className="text-gradient">Vedant Singh</span>
                    </h1>

                    <div className="h-10 mb-8">
                        <p className="text-xl md:text-3xl font-medium text-white/60">
                            A passionate <span className="text-white border-r-2 border-primary pr-1">{displayText}</span>
                        </p>
                    </div>

                    <p className="max-w-xl text-white/50 text-base md:text-lg mb-10 leading-relaxed">
                        Building smart solutions with clean code. Currently focusing on Android development and crafting premium web experiences.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-primary text-white font-bold flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </a>

                        <a href="#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold transition-all duration-300 hover:bg-white/10"
                            >
                                Contact Me
                            </motion.button>
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1U6DPeyg6eY9E6q-vhDkRRij3DSv8-KKQ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full border border-primary/30 text-primary font-bold transition-all duration-300 hover:bg-primary/10"
                            >
                                View Resume
                            </motion.button>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        {[
                            { icon: <Github />, href: "https://github.com" },
                            { icon: <Linkedin />, href: "https://linkedin.com/in/vedantsingh" },
                            { icon: <Mail />, href: "mailto:vedantsingh29303@gmail.com" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: "var(--color-primary)" }}
                                className="text-white/40 transition-colors"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Profile Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Animated Glow Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-20px] border border-dashed border-primary/40 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-40px] border border-dashed border-secondary/30 rounded-full"
                        />

                        {/* Profile Image Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full rounded-3xl overflow-hidden glass border-2 border-white/20 shadow-2xl relative z-10 p-2"
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                <Image
                                    src="/profile.jpg"
                                    alt="Vedant Singh"
                                    fill
                                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Floating Tech Badges */}
                        <motion.div
                            animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 glass p-2.5 rounded-2xl z-20 shadow-xl border-primary/30"
                        >
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                <Smartphone className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-4 -left-4 glass p-2.5 rounded-2xl z-20 shadow-xl border-secondary/30"
                        >
                            <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                                <Code2 className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/20 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
