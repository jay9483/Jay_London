"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsMarquee from "@/components/SkillsMarquee";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-[#121212] min-h-screen selection:bg-white/30 selection:text-white">
      <FloatingContact />

      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas progress={scrollYProgress} />
          <Overlay progress={scrollYProgress} />
        </div>
      </div>

      <Experience />
      <SkillsMarquee />
      <Projects />
      <Footer />
    </div>
  );
}
