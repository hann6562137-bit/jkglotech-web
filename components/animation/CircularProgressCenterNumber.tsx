"use client";

import { useEffect, useState } from "react";

function toHMS(seconds: number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const hrsStr = hrs > 0 ? String(hrs).padStart(2, '0') + 'h' : '';
    const minsStr = mins > 0 ? String(mins).padStart(2, '0') + 'm' : '';
    const secsStr = String(secs).padStart(2, '0') + 's';

    return `${hrsStr} ${minsStr} ${secsStr}`;
}

export default function CircularProgressCenterNumber({
    size = 150,
    strokeWidth = 12,
    target = 70,
    duration = 500,
    isSecond = false,
}) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const [progress, setProgress] = useState(0);

    // Easing Function (ease-in-out cubic)
    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    useEffect(() => {
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const linearRatio = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(linearRatio);

            const value = eased * target;
            setProgress(value);

            if (linearRatio < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [target, duration]);

    const offset = circumference - (progress / 100) * circumference;

    const cx = size / 2;
    const cy = size / 2;

    return (
        <div
            style={{ width: size, height: size }}
            className="relative flex items-center justify-center"
        >
            <svg width={size} height={size}>
                <circle
                    stroke="lightgray"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={cx}
                    cy={cy}
                />

                <circle
                    stroke="dodgerblue"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    r={radius}
                    cx={cx}
                    cy={cy}
                    transform={`rotate(-90 ${cx} ${cy})`}
                />
            </svg>

            <div className="absolute text-white font-bold text-xl select-none">
                {Math.round(progress)}
            </div>
        </div>
    );
}
