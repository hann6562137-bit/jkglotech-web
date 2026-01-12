"use client";

import React, { useId } from 'react';

interface FeatureGridItem {
    number: string;
    title: string;
    description: string;
}

interface FeatureGridProps {
    items: FeatureGridItem[];
    className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ items, className = '' }) => {
    const anchorId = useId();

    return (
        <div
            id={anchorId}
            className={`grid grid-cols-2 xl:grid-cols-3 gap-x-5 xl:gap-x-10 gap-y-4 xl:gap-y-16 ${className}`}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col text-white"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={`${index * 150}`}
                    data-aos-anchor={`#${anchorId}`}
                >
                    <div className="border-b border-gray-700 pb-2 mb-3 xl:mb-6">
                        <span className="text-[#FFD900] font-aldrich text-[15px] md:text-[40px] font-bold">
                            {item.number}
                        </span>
                    </div>
                    <h3 className="text-[15px] md:text-[40px] font-semibold mb-2 xl:mb-4 font-pretendard leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-gray-300 font-pretendard leading-relaxed text-[12px] md:text-[20px] text-medium">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FeatureGrid;
