"use client";

import Image from "next/image";
import LayeredRadar from "./RadialFadePentagon";

interface PentagonChartProps {
    centerImageSrc: string;
    centerImageWidthPercent: number; // e.g., 30 for 30% of chart size
    labels: string[]; // Must be 5 labels
    values?: number[]; // Must be 5 values
}

export default function PentagonChart({
    centerImageSrc,
    centerImageWidthPercent,
    labels,
    values,
}: PentagonChartProps) {
    // Map labels to stats with default/dummy values since not specified
    // Preserving the visual variety of the default stats in LayeredRadar
    const defaultValues = [95, 95, 95, 95, 95];
    const stats = labels.map((label, index) => ({
        name: label,
        percentage: (values && values[index]) || defaultValues[index] || 70
    })).slice(0, 5);

    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <LayeredRadar stats={stats} />

            {/* Center Image Overlay */}
            <div
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                    width: `${centerImageWidthPercent}%`,
                    height: `${centerImageWidthPercent}%`,
                }}
            >
                <Image
                    src={centerImageSrc}
                    alt="Center Product"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}