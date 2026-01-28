"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Web3Forms Error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                            Get In <span className="text-gradient">Touch</span>
                        </h2>
                        <p className="text-white/50 text-lg">Have a project in mind? Let&apos;s build something amazing together.</p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <Reveal delay={0.2}>
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                {[
                                    { icon: <Mail className="text-primary" />, label: "Email", value: "vedantsingh29303@gmail.com", href: "mailto:vedantsingh29303@gmail.com" },
                                    { icon: <Phone className="text-secondary" />, label: "Phone", value: "+91-9532075198", href: "tel:+919532075198" },
                                    { icon: <MapPin className="text-accent" />, label: "Location", value: "Delhi-NCR, India", href: "#" },
                                ].map((item, i) => (
                                    <a key={i} href={item.href} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{item.label}</p>
                                            <p className="text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="pt-8">
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Social Profiles</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Github />, href: "https://github.com" },
                                        { icon: <Linkedin />, href: "https://linkedin.com/in/vedantsingh" },
                                        { icon: <Twitter />, href: "https://twitter.com/vedantsingh" },
                                    ].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 transition-colors"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact Form */}
                    <Reveal delay={0.4}>
                        <GlassCard className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Web3Forms Access Key - GET YOURS AT https://web3forms.com/ */}
                                <input type="hidden" name="access_key" value="7369165d-4f65-4d00-9831-29e614457788" />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="Project Inquiry"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === "loading"}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                    <Send className="w-4 h-4" />
                                </motion.button>

                                {status === "success" && (
                                    <p className="text-green-400 text-sm text-center font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center font-medium">Ops! Something went wrong. Please try again.</p>
                                )}
                            </form>
                        </GlassCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

