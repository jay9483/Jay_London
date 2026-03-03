"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingNavbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;

        // Hide when at the very top (during the canvas hero section)
        if (latest < window.innerHeight * 2) {
            setHidden(true);
        }
        // Show when scrolling down past the hero
        else if (latest > previous && latest > window.innerHeight * 2) {
            setHidden(false);
        }
        // Keep showing when scrolling up, unless we hit the hero again
        else if (latest < previous && latest > window.innerHeight * 2) {
            setHidden(false);
        }
    });

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-150%", opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-4 md:top-8 inset-x-0 mx-auto w-fit z-50 flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
            <button
                onClick={() => scrollToSection('experience')}
                className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
                Experience
            </button>
            <div className="w-[1px] h-3 md:h-4 bg-white/20 mx-1 md:mx-2" />
            <button
                onClick={() => scrollToSection('projects')}
                className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
                Projects
            </button>
        </motion.nav>
    );
}
