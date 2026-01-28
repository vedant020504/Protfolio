"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverGlow?: boolean;
}

export const GlassCard = ({ children, className, hoverGlow = true }: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverGlow ? {
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.2)",
                borderColor: "rgba(168, 85, 247, 0.4)"
            } : {}}
            className={cn(
                "glass-morphism rounded-2xl p-6 transition-all duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
