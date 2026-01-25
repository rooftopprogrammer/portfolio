'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
) {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

interface UseAnimatedCounterOptions {
    duration?: number;
    delay?: number;
}

export function useAnimatedCounter(
    end: number,
    isVisible: boolean,
    options: UseAnimatedCounterOptions = {}
) {
    const { duration = 2000, delay = 0 } = options;
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isVisible || hasAnimated.current) return;
        hasAnimated.current = true;

        const timeout = setTimeout(() => {
            const startTime = Date.now();
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(animate);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, end, duration, delay]);

    return count;
}

interface UseMagneticButtonOptions {
    strength?: number;
}

export function useMagneticButton<T extends HTMLElement = HTMLButtonElement>(
    options: UseMagneticButtonOptions = {}
) {
    const { strength = 0.3 } = options;
    const ref = useRef<T>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }, [strength]);

    const handleMouseLeave = useCallback(() => {
        const element = ref.current;
        if (!element) return;
        element.style.transform = 'translate(0, 0)';
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return ref;
}

interface Use3DCardOptions {
    intensity?: number;
    glare?: boolean;
}

export function use3DCard<T extends HTMLElement = HTMLDivElement>(
    options: Use3DCardOptions = {}
) {
    const { intensity = 10, glare = true } = options;
    const ref = useRef<T>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -intensity;
        const rotateY = ((x - centerX) / centerX) * intensity;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        if (glare) {
            const glareX = (x / rect.width) * 100;
            const glareY = (y / rect.height) * 100;
            element.style.setProperty('--glare-x', `${glareX}%`);
            element.style.setProperty('--glare-y', `${glareY}%`);
        }
    }, [intensity, glare]);

    const handleMouseLeave = useCallback(() => {
        const element = ref.current;
        if (!element) return;
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return ref;
}

interface UseParallaxOptions {
    speed?: number;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
    options: UseParallaxOptions = {}
) {
    const { speed = 0.5 } = options;
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            const scrolled = window.scrollY;
            const offset = (scrolled - rect.top - window.scrollY) * speed;
            element.style.transform = `translateY(${offset}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return ref;
}

// Staggered animation helper
export function getStaggerDelay(index: number, baseDelay: number = 100): string {
    return `${index * baseDelay}ms`;
}
