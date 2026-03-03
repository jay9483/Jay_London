"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Arthur J. Gallagher",
            role: "Business Process Analyst",
            period: "Mar 2024 – Nov 2024",
            description: <>Designed Power BI dashboards, eliminating <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1 py-0.5 rounded">15+ manual hours</span> per week. Reduced ad-hoc data requests by <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1 py-0.5 rounded">40%</span> through self-service reporting ecosystems.</>,
        },
        {
            company: "Wipro",
            role: "Business Process Associate II",
            period: "Mar 2023 – Mar 2024",
            description: <>Automated <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1 py-0.5 rounded">23+ client compliance reports</span>, increasing data accuracy by <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1 py-0.5 rounded">12.5%</span>. Facilitated UAT and process mapping workshops.</>,
        },
        {
            company: "Wipro",
            role: "Process Analyst",
            period: "Nov 2021 – Mar 2023",
            description: <>Managed delivery timelines across <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1 py-0.5 rounded">12 concurrent projects</span>, enhancing on-time completion by <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1 py-0.5 rounded">15%</span> through predictive risk analysis.</>,
        }
    ];

    const education = [
        {
            institution: "Northumbria University, London",
            degree: "MSc Business Analytics",
            period: "Jan 2025 – Jan 2026",
        },
        {
            institution: "KLE Society’s S Nijalingappa College",
            degree: "Bachelor of Business Administration",
            period: "May 2018 – Oct 2021",
        },
        {
            institution: "ALVA’s PU College",
            degree: "Commerce (SEBA)",
            period: "Apr 2016 – Mar 2018",
        }
    ];

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="experience" className="relative z-20 bg-[#121212] pt-16 pb-24 md:pb-32 px-4 md:px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

                {/* Experience Column */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={itemVariants}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <Briefcase className="w-6 h-6 text-white/80" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Work Experience</h3>
                    </motion.div>

                    <div className="space-y-12 border-l border-white/10 pl-8 ml-4 relative">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } }
                                }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#121212] border-2 border-white/30" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h4 className="text-xl font-semibold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">{exp.role}</h4>
                                    <span className="text-sm font-mono text-white/40">{exp.period}</span>
                                </div>
                                <div className="text-white/80 font-medium mb-3 text-lg">{exp.company}</div>
                                <p className="text-white/50 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={itemVariants}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <GraduationCap className="w-6 h-6 text-white/80" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Education</h3>
                    </motion.div>

                    <div className="space-y-12 border-l border-white/10 pl-8 ml-4 relative">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } }
                                }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#121212] border-2 border-white/30" />

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                                    <h4 className="text-xl font-semibold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">{edu.degree}</h4>
                                    <span className="text-sm font-mono text-white/40 whitespace-nowrap">{edu.period}</span>
                                </div>
                                <div className="text-white/80 text-lg font-medium leading-relaxed">
                                    {edu.institution}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
