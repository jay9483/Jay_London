"use client";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    const cases = [
        { title: "HR Analytics Dashboard", category: "Power BI & Data Viz", year: "2024" },
        { title: "Nike/Walmart Sales Analysis", category: "SQL & Analytics", year: "2023" },
        { title: "Scalable Web Apps on K8s", category: "IBM Certification", year: "2024" },
        { title: "Business Analysis Foundation", category: "IIBA Certification", year: "2024" },
    ];

    return (
        <section className="relative z-20 bg-[#121212] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white">Projects & Certifications</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((project, i) => (
                        <div
                            key={i}
                            className="group relative h-96 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/10 cursor-pointer flex flex-col justify-between p-8"
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-start z-10 text-white/50 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-mono tracking-wider uppercase">{project.category}</span>
                                <span className="text-sm font-mono">{project.year}</span>
                            </div>

                            <div className="z-10 flex justify-between items-end">
                                <h4 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">{project.title}</h4>
                                <div className="p-3 rounded-full bg-white/10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
