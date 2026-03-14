"use client";

import { motion, Variants } from "framer-motion";
import { BarChart3, Settings2, Target, Users } from "lucide-react";

export default function KeyCallouts() {
    const callouts = [
        {
            title: "Data Analysis",
            description: "Translating complex datasets into clear, actionable business strategies using Power BI and advanced analytics.",
            icon: <BarChart3 className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "Process Optimization",
            description: "Identifying inefficiencies and automating workflows to save manual hours and improve data accuracy.",
            icon: <Settings2 className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Project Management",
            description: "Managing delivery timelines across concurrent projects using predictive risk analysis and agile methodologies.",
            icon: <Target className="w-6 h-6 text-purple-400" />
        },
        {
            title: "Stakeholder Collaboration",
            description: "Bridging the gap between technical and business teams through effective communication and UAT facilitation.",
            icon: <Users className="w-6 h-6 text-orange-400" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative z-20 bg-[#121212] pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Core <span className="text-white/50 italic">Specialties</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto md:mx-0">
                        A quick glance at the primary skills and methodologies I bring to the table.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {callouts.map((callout, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group flex flex-col items-start"
                        >
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {callout.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {callout.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {callout.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
