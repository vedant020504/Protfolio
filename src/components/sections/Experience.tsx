"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
    {
        title: "Bachelor of Technology in CSE",
        institution: "KIET Group of Institutions, Delhi-NCR",
        period: "2024 - 2027",
        desc: "Focusing on Software Engineering, Data Structures, and Core CS Fundamentals.",
        type: "education",
        icon: <GraduationCap />
    },
    {
        title: "Diploma in Computer Science",
        institution: "Government Polytechnic, Aurai Bhadohi",
        period: "2020 - 2023",
        desc: "Acquired foundation in programming languages and system design. Graduated with 76%.",
        type: "education",
        icon: <Award />
    },
    {
        title: "Cybersecurity analyst Job Simulation",
        institution: "Forage",
        period: "Aug 2025",
        desc: "Completed hands-on tasks in IAM fundamentals and platform integration.",
        type: "certification",
        icon: <Briefcase />
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-white/50">Education, Experience and Certifications</p>
                </div>

                <div className="relative border-l border-white/10 ml-6 md:ml-0 md:left-1/2">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:left-[-100%]" : "md:pl-12 md:ml-0"}`}
                        >
                            <div className="absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -left-[9px] md:left-auto md:right-[-9px] shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10"
                                style={index % 2 === 1 ? { left: '-9px', right: 'auto' } : {}} />

                            <GlassCard className="hover:border-primary/50 transition-colors">
                                <div className={`flex items-center gap-3 mb-2 text-primary ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                    {item.icon}
                                    <span className="text-sm font-bold tracking-widest uppercase">{item.period}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-secondary font-medium mb-3 text-sm">{item.institution}</p>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
