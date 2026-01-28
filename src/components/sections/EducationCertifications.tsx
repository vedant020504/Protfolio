"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { GraduationCap, Award, School, BookOpen, ShieldCheck, Database, Code } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "../ui/Reveal";

const education = [
    {
        title: "Bachelor of Technology in Computer Science Engineering",
        institution: "KIET Group of Institutions, Delhi-NCR",
        period: "2024 - 2027",
        score: "CGPA: 7.68 / 10",
        icon: <GraduationCap className="text-primary" />
    },
    {
        title: "Diploma in Information Technology",
        institution: "Government Polytechnic, Aurai Bhadohi",
        period: "2020 - 2023",
        score: "76%",
        icon: <School className="text-secondary" />
    },
    {
        title: "High School",
        institution: "Mukularanyam English School, Varanasi",
        period: "2020",
        score: "74%",
        icon: <BookOpen className="text-accent" />
    }
];

const certifications = [
    {
        title: "Cybersecurity Analyst Job Simulation",
        provider: "Forage",
        date: "Aug 2025",
        desc: "IAM fundamentals, strategy assessment, and platform integration.",
        icon: <ShieldCheck className="text-primary" />
    },
    {
        title: "Getting Started with MongoDB Atlas",
        provider: "MongoDB University",
        date: "Aug 2025",
        desc: "Database deployment, CRUD operations, and query optimization.",
        icon: <Database className="text-secondary" />
    },
    {
        title: "Learn Programming with Java",
        provider: "Wingspan",
        date: "Jun 2025",
        desc: "Practical experience in Java programming and OOP concepts.",
        icon: <Code className="text-accent" />
    },
    {
        title: "Cybersecurity Foundation",
        provider: "Palo Alto Networks Academy",
        date: "May 2025",
        desc: "Core cybersecurity principles, threat prevention, and defense.",
        icon: <Award className="text-primary" />
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-24 px-4 bg-background/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            My <span className="text-gradient">Education</span>
                        </h2>
                        <p className="text-white/50 text-lg">Academic background and qualifications</p>
                    </div>
                </Reveal>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
                    />

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col items-start ${index % 2 === 0 ? "md:items-end md:pr-[50%] md:mr-4" : "md:pl-[50%] md:ml-4"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-36px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />

                                <GlassCard className="w-full hover:border-primary/40 transition-all duration-300 group p-6">
                                    <div className={`flex flex-col gap-4 ${index % 2 === 0 ? "md:items-end md:text-right" : ""}`}>
                                        <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{item.period}</span>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-white/60 text-sm font-medium mb-4">{item.institution}</p>
                                            <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                                                {item.score}
                                            </span>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            My <span className="text-gradient">Certifications</span>
                        </h2>
                        <p className="text-white/50 text-lg">Professional growth and specialized training</p>
                    </div>
                </Reveal>

                <StaggerContainer>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((item, index) => (
                            <StaggerItem key={index}>
                                <GlassCard className="h-full flex flex-col p-6 group hover:bg-white/5 transition-all">
                                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-primary text-sm font-bold mb-4">{item.provider}</p>
                                    <p className="text-white/50 text-xs leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest mt-auto">{item.date}</span>
                                </GlassCard>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
};

