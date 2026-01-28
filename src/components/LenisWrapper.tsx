import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

interface LenisWrapperProps {
    children: React.ReactNode;
}

const LenisWrapper: React.FC<LenisWrapperProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Reset scroll on route change
    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [location.pathname]);

    return <>{children}</>;
};

export default LenisWrapper;
