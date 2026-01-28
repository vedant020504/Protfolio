"use client";

import { Reveal, StaggerContainer, StaggerItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Code2, Cpu, Globe, Layout, Palette, Terminal } from "lucide-react";

const skills = [
    { name: "Java (DSA)", level: 90, icon: <Code2 className="w-5 h-5" /> },
    { name: "Kotlin / Android SDK", level: 85, icon: <Cpu className="w-5 h-5" /> },
    { name: "React / Next.js", level: 80, icon: <Layout className="w-5 h-5" /> },
    { name: "SQL / Firebase", level: 75, icon: <Terminal className="w-5 h-5" /> },
    { name: "Tailwind / CSS", level: 90, icon: <Palette className="w-5 h-5" /> },
    { name: "Full Stack Dev", level: 70, icon: <Globe className="w-5 h-5" /> },
];

export const AboutAndSkills = () => {
    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* About Me */}
                <Reveal>
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-display font-bold">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                            <p>
                                Hey! I&apos;m Vedant, an Android Developer and Computer Science student passionate about
                                building high-performance applications with beautiful user interfaces.
                            </p>
                            <p>
                                My journey started with a deep curiosity about how mobile apps work, leading me to
                                master Java and Kotlin. Currently, I&apos;m expanding my horizons into full-stack web
                                development, exploring the power of React and Next.js.
                            </p>
                            <div className="pt-4 grid grid-cols-2 gap-4">
                                <GlassCard className="p-5 flex items-center gap-3" hoverGlow={false}>
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                                        <span className="font-bold">2+</span>
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest">Years of Learning</span>
                                </GlassCard>
                                <GlassCard className="p-5 flex items-center gap-3" hoverGlow={false}>
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20">
                                        <span className="font-bold">10+</span>
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-wider">Projects Made</span>
                                </GlassCard>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Skills Section */}
                <div className="space-y-8" id="skills">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-display font-bold">
                            My <span className="text-gradient">Skills</span>
                        </h2>
                    </Reveal>
                    <StaggerContainer>
                        <div className="grid gap-4">
                            {skills.map((skill, index) => (
                                <StaggerItem key={index}>
                                    <GlassCard className="p-4 group hover:bg-white/5 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3 text-white">
                                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-semibold">{skill.name}</span>
                                            </div>
                                            <span className="text-secondary text-sm font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                                            />
                                        </div>
                                    </GlassCard>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};

