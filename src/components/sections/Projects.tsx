"use client";

import { Reveal, StaggerContainer, StaggerItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Github, ExternalLink, Smartphone, Database, Music } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Student Attendance Tracker",
        description: "Android app for managing student attendance with SQLite for offline data storage and Material Design UI.",
        tech: ["Kotlin", "Android SDK", "SQLite"],
        icon: <Smartphone className="w-6 h-6" />,
        link: "#",
        github: "#",
        color: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Notes App",
        description: "Cloud-synced note taking app with Firebase Authentication and Realtime Database integration.",
        tech: ["Kotlin", "Firebase", "Android SDK"],
        icon: <Database className="w-6 h-6" />,
        link: "#",
        github: "#",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Simple Music Player",
        description: "Interactive music player exploring MediaPlayer API and dynamic Recycler View list animations.",
        tech: ["Java", "Android SDK", "Material UI"],
        icon: <Music className="w-6 h-6" />,
        link: "#",
        github: "#",
        color: "from-cyan-500/20 to-purple-500/20"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-white/50 text-lg mx-auto max-w-2xl">
                            A collection of my recent work in Android and Web development, focusing on performance and user experience.
                        </p>
                    </div>
                </Reveal>

                <StaggerContainer>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <StaggerItem key={index}>
                                <GlassCard className="h-full flex flex-col group overflow-hidden border-white/5">
                                    <div className={`p-8 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative`}>
                                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white z-10">
                                            {project.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                                    </div>

                                    <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-white/50 text-sm mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <motion.a
                                            whileHover={{ y: -3, scale: 1.1 }}
                                            href={project.github}
                                            className="p-2 rounded-full glass hover:bg-primary transition-colors text-white/70 hover:text-white"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ y: -3, scale: 1.1 }}
                                            href={project.link}
                                            className="p-2 rounded-full glass hover:bg-secondary transition-colors text-white/70 hover:text-white"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </GlassCard>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
};

