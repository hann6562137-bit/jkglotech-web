"use client";

import { useEffect, useState, useRef } from "react";

type Stat = { name: string; percentage: number };

// Internal coordinate system size
const COORD_SIZE = 500;

export default function LayeredRadar({
    duration = 700,
    stats = [
        { name: "신축성", percentage: 80 },
        { name: "내구성", percentage: 65 },
        { name: "통기성", percentage: 50 },
        { name: "친환경성", percentage: 70 },
        { name: "강성", percentage: 40 },
    ],
}: {
    duration?: number;
    stats: Stat[];
}) {
    const [scale, setScale] = useState(0.7);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const cx = COORD_SIZE / 2;
    const cy = COORD_SIZE / 2;
    const rMax = COORD_SIZE * 0.4;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const start = performance.now();
        const animate = (t: number) => {
            const elapsed = t - start;
            const ratio = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - ratio, 3);

            setScale(0.7 + eased * 0.3);

            if (ratio < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [duration, isVisible]);

    if (stats.length !== 5) {
        return <div style={{ color: "red" }}>stats.length must be 5</div>;
    }

    const getPolygon = (values: number[]) =>
        values
            .map((percent, i) => {
                const angle = (-90 + i * 72) * (Math.PI / 180);
                const r = (percent / 100) * rMax;
                return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
            })
            .join(" ");

    const layerPercents = [
        [40, 40, 40, 40, 40],
        [60, 60, 60, 60, 60],
        [80, 80, 80, 80, 80],
        [100, 100, 100, 100, 100],
    ];

    const colors = [
        'rgba(255,255,255,0.1)',
        'rgba(255,255,255,0.1)',
        'rgba(255,255,255,0.1)',
        'rgba(255,255,255,0)',
    ]

    const layers = layerPercents.map(getPolygon);
    const dataPoints = getPolygon(stats.map((s) => s.percentage));

    // dataPoints for outline animation logic (scaled inside SVG logic if needed, but here we just animate transform)

    // 🔥 최외각 꼭짓점 좌표 계산 (100% 레이어)
    const outerPoints = layerPercents[3].map((percent, i) => {
        const angle = (-90 + i * 72) * (Math.PI / 180);
        const r = (percent / 100) * rMax;
        return {
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle),
            angle,
        };
    });

    return (
        <div className="w-full h-full" ref={containerRef}>
            <svg viewBox={`0 0 ${COORD_SIZE} ${COORD_SIZE}`} className="w-full h-full overflow-visible">
                {/* ⭐ 레이어 오각형 border (항상 표시) */}
                {layers.map((points, i) => (
                    <polygon
                        key={i}
                        points={points}
                        fill={colors[i]}
                        stroke="white"
                        strokeDasharray="2 2"
                        strokeWidth={0.7}
                        opacity={0.6}
                    />
                ))}

                <polygon
                    points={dataPoints}
                    fill="rgba(255,255,255,0.2)"
                    style={{
                        transformOrigin: `${cx}px ${cy}px`,
                        transform: `scale(${scale})`,
                    }}
                />

                {/* ⭐ 각 꼭짓점에 점 + 텍스트 */}
                {outerPoints.map((p, i) => {
                    // 텍스트는 점에서 더 밖으로
                    const labelRadius = rMax + 25; // 텍스트 거리 보정
                    const lx = cx + labelRadius * Math.cos(p.angle);
                    const ly = cy + labelRadius * Math.sin(p.angle);

                    // 텍스트 라인 분리
                    const lines = stats[i].name.split('\n');
                    const lineHeight = 16;

                    // Left-align text block manually based on position
                    // 0: Top (-90deg), 1: TR (-18deg), 2: BR (54deg), 3: BL (126deg), 4: TL (-162deg)
                    let xOffset = 0;
                    if (i === 0) xOffset = -40; // Center-ish for Top
                    else if (i === 3 || i === 4) xOffset = -80; // Shift left for Left-side points (BL, TL)
                    // i === 1, 2 are Right side, no offset needed for start-align

                    const finalLx = lx + xOffset;

                    return (
                        <g key={i}>
                            {/* 점 */}
                            <circle cx={p.x} cy={p.y} r={4} fill="white" />

                            {/* 텍스트 */}
                            <text
                                x={finalLx}
                                y={ly - ((lines.length - 1) * lineHeight) / 2} // 세로 중앙 정렬 보정
                                fill="white"
                                fontSize="16"
                                fontWeight="medium"
                                textAnchor="start" // Always start (left) align
                                dominantBaseline="middle"
                                className="font-pretendard"
                            >
                                {lines.map((line, k) => (
                                    <tspan key={k} x={finalLx} dy={k === 0 ? 0 : lineHeight}>
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
