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
        <section id="education" className="py-24 px-4 bg-background/50">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            My <span className="text-gradient">Education</span>
                        </h2>
                        <p className="text-white/50 text-lg">Academic background and qualifications</p>
                    </div>
                </Reveal>

                <StaggerContainer>
                    <div className="space-y-6">
                        {education.map((item, index) => (
                            <StaggerItem key={index}>
                                <GlassCard className="flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/40 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-white/60 text-sm font-medium">{item.institution}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end shrink-0">
                                        <span className="text-primary font-bold text-lg">{item.score}</span>
                                        <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{item.period}</span>
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

