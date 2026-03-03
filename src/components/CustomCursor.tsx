"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over standard clickable elements
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", updateHoverState);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", updateHoverState);
        };
    }, []);

    // Only render on desktop to prevent mobile touch issues
    const [isMounted, setIsMounted] = useState(false);
    /* eslint-disable react-hooks/set-state-in-effect */
    useEffect(() => {
        setIsMounted(window.innerWidth > 768);
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */

    if (!isMounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-[100] hidden md:flex items-center justify-center -ml-4 -mt-4 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isHovering ? 2 : 1,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.5
            }}
        >
            {isHovering && (
                <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
            )}
        </motion.div>
    );
}
