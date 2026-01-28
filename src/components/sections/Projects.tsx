"use client";

import { Reveal, StaggerContainer, StaggerItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Github, ExternalLink, Smartphone, Database, Music, Layout, Code, Monitor } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "Student Attendance Tracker",
        description: "Android app for managing student attendance with SQLite for offline data storage and Material Design UI.",
        tech: ["Kotlin", "Android SDK", "SQLite"],
        icon: <Smartphone className="w-6 h-6" />,
        link: "#",
        github: "#",
        category: "Mobile",
        color: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Notes App",
        description: "Cloud-synced note taking app with Firebase Authentication and Realtime Database integration.",
        tech: ["Kotlin", "Firebase", "Android SDK"],
        icon: <Database className="w-6 h-6" />,
        link: "#",
        github: "#",
        category: "Mobile",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Simple Music Player",
        description: "Interactive music player exploring MediaPlayer API and dynamic Recycler View list animations.",
        tech: ["Java", "Android SDK", "Material UI"],
        icon: <Music className="w-6 h-6" />,
        link: "#",
        github: "#",
        category: "Mobile",
        color: "from-cyan-500/20 to-purple-500/20"
    }
];

const categories = ["All", "Web", "Mobile", "Other"];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(project =>
        activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="projects" className="py-24 px-4 bg-background relative">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-white/50 text-lg mx-auto max-w-2xl mb-8">
                            A collection of my recent work in Android and Web development.
                        </p>
                    </div>
                </Reveal>

                {/* Filter Buttons */}
                <Reveal delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${activeCategory === cat
                                    ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                                    : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <GlassCard className="h-full flex flex-col group overflow-hidden border-white/5 p-6 hover:border-primary/50 transition-all duration-500">
                                    <div className={`p-8 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative`}>
                                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white z-10 shadow-xl group-hover:rotate-6 transition-transform">
                                            {project.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                                    </div>

                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-white/50 text-sm mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <motion.a
                                            whileHover={{ y: -3, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.github}
                                            className="p-3 rounded-xl glass hover:bg-primary transition-colors text-white/70 hover:text-white"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ y: -3, scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.link}
                                            className="p-3 rounded-xl glass hover:bg-secondary transition-colors text-white/70 hover:text-white"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

