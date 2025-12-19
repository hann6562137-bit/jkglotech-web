"use client";

import Image from "next/image";

interface FeatureCardProps {
    imageSrc: string;
    title: string;
    description: string | string[];
    className?: string;
    isRight?: boolean;
    isBackground?: boolean;
}

export default function FeatureCard({
    imageSrc,
    title,
    description,
    className,
    isRight = false,
    isBackground = true
}: FeatureCardProps) {
    return (
        <div className={`flex flex-col space-y-5 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} w-full overflow-hidden ${className} font-pretendard`}>
            {/* Image Section */}
            <div className={`relative w-full md:w-1/2 h-auto ${isBackground ? 'bg-[#303030]' : ''}`}>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-16 md:pr-24">
                <h3 className="text-[40px] font-bold text-white mb-6 font-pretendard">
                    {title}
                </h3>
                {Array.isArray(description) ? (
                    <ul className="text-gray-400 text-[20px] leading-relaxed font-pretendard list-disc pl-5 space-y-2">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400 text-[20px] leading-relaxed whitespace-pre-line font-pretendard">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
