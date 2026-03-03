"use client";

import { useEffect, useRef, useCallback } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas({ progress }: { progress: MotionValue<number> }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const frameIndex = useTransform(progress, [0, 1], [0, FRAME_COUNT - 1]);

    const drawImage = useCallback((index: number) => {
        if (imagesRef.current.length === 0) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[index];
        if (img && img.complete) {
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = canvas.width / 2 - (img.width / 2) * scale;
            const y = canvas.height / 2 - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    }, []);

    useEffect(() => {
        // Preload internal objects
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new window.Image();
            const id = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${id}_delay-0.066s.png`;
            loadedImages.push(img);
        }
        imagesRef.current = loadedImages;
        drawImage(0);
    }, [drawImage]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        drawImage(Math.round(latest));
    });

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                drawImage(Math.round(frameIndex.get()));
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [drawImage, frameIndex]);

    return <canvas ref={canvasRef} className="block h-full w-full object-cover" />;
}
