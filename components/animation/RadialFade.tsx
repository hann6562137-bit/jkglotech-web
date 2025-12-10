"use client";

import { useEffect, useState, CSSProperties, useRef } from "react";

type Props = {
    size?: number;
    duration?: number;
    className?: string;
    style?: CSSProperties;
};

export default function RadialRingsSVG({
    size = 220,
    duration = 500,
    className,
    style,
}: Props) {
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.8);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const ref = useRef<SVGSVGElement>(null);

    // 화면 진입 감지
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldAnimate(true);
                    observer.disconnect(); // 한 번만 실행
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // 애니메이션 실행
    useEffect(() => {
        if (!shouldAnimate) return;

        const start = performance.now();

        const animate = (t: number) => {
            const elapsed = t - start;
            const r = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - r, 3);

            setOpacity(eased);
            setScale(0.8 + eased * 0.2);

            if (r < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [shouldAnimate, duration]);

    const cx = size / 2;
    const cy = size / 2;

    const R1 = size * 0.32;
    const R2 = size * 0.42;
    const R3 = size * 0.5;

    return (
        <svg
            ref={ref}
            viewBox={`0 0 ${size} ${size}`}
            className={className}
            style={{
                width: "100%",
                height: "100%",
                transform: `scale(${scale})`,
                opacity,
                transition: "none",
                ...style,
            }}
        >
            <defs>
                <radialGradient id="ring1grad" gradientUnits="userSpaceOnUse" cx={cx} cy={cy} r={R1}>
                    <stop offset="0%" stopColor="rgba(50,50,50,0.3)" />
                    <stop offset="100%" stopColor="rgba(50,50,50,0.3)" />
                </radialGradient>

                <radialGradient id="ring2grad" gradientUnits="userSpaceOnUse" cx={cx} cy={cy} r={R2}>
                    <stop offset={(R1 / R2) * 100 + "%"} stopColor="rgba(50,50,50,0.1)" />
                    <stop offset="100%" stopColor="rgba(70,70,70,0.3)" />
                </radialGradient>

                <radialGradient id="ring3grad" gradientUnits="userSpaceOnUse" cx={cx} cy={cy} r={R3}>
                    <stop offset={(R2 / R3) * 100 + "%"} stopColor="rgba(50,50,50,0.2)" />
                    <stop offset="100%" stopColor="rgba(50,50,50,0.3)" />
                </radialGradient>

                <mask id="ring1mask">
                    <circle cx={cx} cy={cy} r={R1} fill="white" />
                </mask>

                <mask id="ring2mask">
                    <circle cx={cx} cy={cy} r={R2} fill="white" />
                    <circle cx={cx} cy={cy} r={R1} fill="black" />
                </mask>

                <mask id="ring3mask">
                    <circle cx={cx} cy={cy} r={R3} fill="white" />
                    <circle cx={cx} cy={cy} r={R2} fill="black" />
                </mask>
            </defs>

            <circle cx={cx} cy={cy} r={R1} fill="url(#ring1grad)" mask="url(#ring1mask)" />
            <circle cx={cx} cy={cy} r={R2} fill="url(#ring2grad)" mask="url(#ring2mask)" />
            <circle cx={cx} cy={cy} r={R3} fill="url(#ring3grad)" mask="url(#ring3mask)" />
        </svg>
    );
}
