"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    const cases = [
        {
            title: "HR Analytics Dashboard",
            category: "Power BI & Data Viz",
            year: "2024",
            link: "https://public.tableau.com/views/PrithviJayaprakash-HRAnalyticsDashboard/HRAnalyticsDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            image: "/hr_dashboard.png"
        },
        {
            title: "Nike/Walmart Sales Analysis",
            category: "SQL & Analytics",
            year: "2023",
            link: "https://public.tableau.com/views/NikeSoldtooLessinIndia_Letsseewhy/NikeSalesDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            image: "/sales_dashboard.png"
        },
        {
            title: "DevOps Fundamentals",
            category: "IBM Certification",
            year: "2024",
            link: "https://courses.staragile.skillsnetwork.site/certificates/cb594ffb3a724fe3a15f84f80b9ea42c",
            image: "/devops_cert.png"
        },
        {
            title: "Business Analysis Foundation",
            category: "IIBA Certification",
            year: "2024",
            link: "https://www.linkedin.com/learning/certificates/623267d8edb39c3df8c3e524d26fcfd4bacf95f2860d52adf88a6f55bd705e72?trk=share_certificate",
            image: "/iiba_cert.png"
        },
    ];

    return (
        <section className="relative z-20 bg-[#121212] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white">Projects & Certifications</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((project, i) => (
                        <a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative h-96 py-8 px-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-500 hover:border-white/30 cursor-pointer flex flex-col justify-between block"
                        >
                            {/* Background Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
                            />

                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none z-0" />

                            <div className="flex justify-between items-start z-10 text-white/70 group-hover:text-white transition-colors">
                                <span className="text-sm font-mono tracking-wider uppercase drop-shadow-md">{project.category}</span>
                                <span className="text-sm font-mono drop-shadow-md">{project.year}</span>
                            </div>

                            <div className="z-10 flex justify-between items-end drop-shadow-lg">
                                <h4 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">{project.title}</h4>
                                <div className="p-3 rounded-full bg-white/10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-md border border-white/20">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
