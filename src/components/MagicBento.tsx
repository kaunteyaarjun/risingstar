import { useRef, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

interface CardData {
    color: string;
    title: string;
    description: string;
    label: string;
}

interface MagicBentoProps {
    cards: CardData[];
    textAutoHide?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
    clickEffect?: boolean;
}

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (
    card: HTMLElement,
    mouseX: number,
    mouseY: number,
    glow: number,
    radius: number
) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const GlobalSpotlight = ({
    gridRef,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}: {
    gridRef: React.RefObject<HTMLDivElement | null>;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}) => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const isInsideSection = useRef(false);

    useEffect(() => {
        if (!gridRef?.current || !enabled) return;

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current || !gridRef.current) return;

            const section = gridRef.current.closest('.bento-section') as HTMLElement | null;
            const rect = section?.getBoundingClientRect();
            const mouseInside =
                rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

            isInsideSection.current = mouseInside || false;
            const cards = gridRef.current.querySelectorAll('.magic-bento-card');

            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                return;
            }

            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
            let minDistance = Infinity;

            cards.forEach(card => {
                const cardElement = card as HTMLElement;
                const cardRect = cardElement.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance =
                    Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                const effectiveDistance = Math.max(0, distance);

                minDistance = Math.min(minDistance, effectiveDistance);

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });

            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.8
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                        : 0;

            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            isInsideSection.current = false;
            gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
                (card as HTMLElement).style.setProperty('--glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, [gridRef, enabled, spotlightRadius, glowColor]);

    return null;
};

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const MagicBento = ({
    cards,
    textAutoHide = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true
}: MagicBentoProps) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();

    return (
        <>
            {enableSpotlight && !isMobile && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <div className="card-grid bento-section" ref={gridRef}>
                {cards.map((card, index) => {
                    const baseClassName = `magic-bento-card ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
                    const cardProps: { className: string; style: CSSProperties } = {
                        className: baseClassName,
                        style: {
                            backgroundColor: card.color,
                            '--glow-color': glowColor
                        } as CSSProperties
                    };

                    return (
                        <div
                            key={index}
                            {...cardProps}
                            ref={el => {
                                if (!el || isMobile) return;

                                const handleClick = (e: MouseEvent) => {
                                    if (!clickEffect) return;

                                    const rect = el.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;

                                    const maxDistance = Math.max(
                                        Math.hypot(x, y),
                                        Math.hypot(x - rect.width, y),
                                        Math.hypot(x, y - rect.height),
                                        Math.hypot(x - rect.width, y - rect.height)
                                    );

                                    const ripple = document.createElement('div');
                                    ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `;

                                    el.appendChild(ripple);

                                    gsap.fromTo(
                                        ripple,
                                        {
                                            scale: 0,
                                            opacity: 1
                                        },
                                        {
                                            scale: 1,
                                            opacity: 0,
                                            duration: 0.8,
                                            ease: 'power2.out',
                                            onComplete: () => ripple.remove()
                                        }
                                    );
                                };

                                el.addEventListener('click', handleClick as EventListener);
                            }}
                        >
                            <div className="magic-bento-card__header">
                                <div className="magic-bento-card__label">{card.label}</div>
                            </div>
                            <div className="magic-bento-card__content">
                                <h2 className="magic-bento-card__title">{card.title}</h2>
                                <p className="magic-bento-card__description">{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MagicBento;
