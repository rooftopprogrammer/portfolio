"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
}

const colors = [
    "rgba(255, 107, 53, 0.4)",  // Orange
    "rgba(255, 143, 107, 0.3)", // Light orange
    "rgba(139, 92, 246, 0.3)",  // Purple
    "rgba(255, 179, 153, 0.25)", // Peach
];

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Defer loading to improve LCP
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let lastTime = 0;
        const targetFPS = 30; // Limit to 30 FPS for performance
        const frameInterval = 1000 / targetFPS;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2); // Cap DPR for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };

        const createParticles = () => {
            particles = [];
            // Reduced particle count for better performance
            const particleCount = Math.min(
                Math.floor((window.innerWidth * window.innerHeight) / 30000),
                40 // Cap at 40 particles
            );
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.5 + 0.2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const drawParticles = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(drawParticles);

            // Throttle to target FPS
            const deltaTime = currentTime - lastTime;
            if (deltaTime < frameInterval) return;
            lastTime = currentTime - (deltaTime % frameInterval);

            const width = window.innerWidth;
            const height = window.innerHeight;

            ctx.clearRect(0, 0, width, height);

            // Draw particles
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0) particle.x = width;
                if (particle.x > width) particle.x = 0;
                if (particle.y < 0) particle.y = height;
                if (particle.y > height) particle.y = 0;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });

            // Draw subtle connections
            const connectionDistance = 120;
            ctx.lineWidth = 0.3;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;

                    // Early exit optimization
                    if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

                    const distanceSq = dx * dx + dy * dy;
                    const maxDistSq = connectionDistance * connectionDistance;

                    if (distanceSq < maxDistSq) {
                        const opacity = 0.06 * (1 - distanceSq / maxDistSq);
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;
                        ctx.stroke();
                    }
                }
            }
        };

        resize();
        createParticles();
        animationFrameId = requestAnimationFrame(drawParticles);

        const handleResize = () => {
            resize();
            createParticles();
        };

        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none opacity-40"
            aria-hidden="true"
        />
    );
}
