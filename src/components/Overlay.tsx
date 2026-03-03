"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
    // Section 1: 0% to 20% fade out, moves up a bit
    const y1 = useTransform(progress, [0, 0.2], [0, -50]);
    const opacity1 = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0]);

    // Section 2: fades in at 25%, fully visible 30-40%, fades out 45%
    const y2 = useTransform(progress, [0.2, 0.45], [50, -50]);
    const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);

    // Section 3: fades in at 55%, fully visible 60-70%, fades out 75%
    const y3 = useTransform(progress, [0.45, 0.75], [50, -50]);
    const opacity3 = useTransform(progress, [0.45, 0.6, 0.7, 0.75], [0, 1, 1, 0]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 text-white">
                    Prithvi Jayaprakash
                </h1>
                <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide uppercase mb-12">
                    Business Analyst
                </p>
                <a
                    href="/prithvi_jayaprakash_cv.pdf"
                    download
                    className="pointer-events-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    Download CV
                </a>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex flex-col justify-center items-start text-left"
            >
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight max-w-2xl text-white">
                    I turn data into <br />
                    <span className="text-white/60 italic">actionable insights.</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex flex-col justify-center items-end text-right"
            >
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight max-w-2xl text-white">
                    Bridging
                    <br /> <span className="text-white/60">business and technology.</span>
                </h2>
            </motion.div>
        </div>
    );
}
