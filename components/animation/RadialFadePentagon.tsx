"use client";

import { useEffect, useState } from "react";

type Stat = { name: string; percentage: number };

export default function LayeredRadar({
    size = 500,
    duration = 700,
    stats = [
        { name: "신축성", percentage: 80 },
        { name: "내구성", percentage: 65 },
        { name: "통기성", percentage: 50 },
        { name: "친환경성", percentage: 70 },
        { name: "강성", percentage: 40 },
    ],
}: {
    size?: number;
    duration?: number;
    stats: Stat[];
}) {
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.7);

    const cx = size / 2;
    const cy = size / 2;
    const rMax = size * 0.2;

    useEffect(() => {
        const start = performance.now();
        const animate = (t: number) => {
            const elapsed = t - start;
            const ratio = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - ratio, 3);

            setOpacity(eased);
            setScale(0.7 + eased * 0.3);

            if (ratio < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [duration]);

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
        [20, 20, 20, 20, 20],
        [45, 45, 45, 45, 45],
        [70, 70, 70, 70, 70],
        [100, 100, 100, 100, 100],
    ];

    const layers = layerPercents.map(getPolygon);
    const dataPoints = getPolygon(stats.map((s) => s.percentage));

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
        <div style={{ width: size, height: size }}>
            <svg width={size} height={size}>
                <defs>
                    <mask id="radarMask">
                        <rect width="100%" height="100%" fill="black" />
                        <polygon
                            points={dataPoints}
                            fill="white"
                            style={{
                                transformOrigin: `${cx}px ${cy}px`,
                                transform: `scale(${scale})`,
                            }}
                        />
                    </mask>
                </defs>

                {/* ⭐ 레이어 채움 (mask 적용) */}
                <g mask="url(#radarMask)" opacity={opacity}>
                    {layers.map((points, i) => (
                        <polygon
                            key={i}
                            points={points}
                            fill={`rgba(255,255,255,${0.15 - i * 0.03})`}
                        />
                    ))}
                </g>

                {/* ⭐ 레이어 오각형 border (항상 표시) */}
                {layers.map((points, i) => (
                    <polygon
                        key={i}
                        points={points}
                        fill="none"
                        stroke="white"
                        strokeDasharray="4 3"
                        strokeWidth={1}
                        opacity={0.6}
                    />
                ))}

                {/* ⭐ 데이터 오각형 Outline */}
                <polygon
                    points={dataPoints}
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeOpacity={0.9}
                    style={{
                        transformOrigin: `${cx}px ${cy}px`,
                        transform: `scale(${scale})`,
                        opacity,
                    }}
                />

                {/* ⭐ 각 꼭짓점에 점 + 텍스트 */}
                {outerPoints.map((p, i) => {
                    // 텍스트는 점에서 더 밖으로
                    const labelRadius = rMax + 18; // 텍스트 거리
                    const lx = cx + labelRadius * Math.cos(p.angle);
                    const ly = cy + labelRadius * Math.sin(p.angle);

                    // ✔ 각도에 따라 align 다르게
                    let anchor: "middle" | "start" | "end" = "middle";
                    if (p.angle > -Math.PI / 2 && p.angle < Math.PI / 2) {
                        anchor = "start"; // 오른쪽
                    } else if (p.angle > Math.PI / 2 || p.angle < -Math.PI / 2) {
                        anchor = "end"; // 왼쪽
                    }

                    return (
                        <g key={i}>
                            {/* 점 */}
                            <circle cx={p.x} cy={p.y} r={4} fill="white" />

                            {/* 텍스트 */}
                            <text
                                x={lx}
                                y={ly}
                                fill="white"
                                fontSize="12"
                                textAnchor={anchor}
                                dominantBaseline="middle"
                            >
                                {stats[i].name}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
