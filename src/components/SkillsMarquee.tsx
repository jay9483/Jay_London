"use client";

import { motion } from "framer-motion";

export default function SkillsMarquee() {
    const skills = [
        "POWER BI", "SQL", "TABLEAU", "BUSINESS ANALYSIS", "DATA VISUALIZATION", "AGILE", "PYTHON", "STAKEHOLDER ENGAGEMENT"
    ];

    // Duplicate to fill screen width multiple times to ensure the -50% trick works perfectly seamlessly
    const half = [...skills, ...skills];

    return (
        <section className="relative z-20 bg-[#121212] py-24 overflow-hidden border-t border-white/5">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex gap-16 pr-16"
                >
                    {[...half, ...half].map((skill, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-4xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/30 uppercase">
                                {skill}
                            </span>
                            <span className="text-white/20 text-3xl flex-shrink-0" aria-hidden="true">
                                ✦
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
