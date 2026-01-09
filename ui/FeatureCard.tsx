"use client";

import Image from "next/image";
import { useId } from "react";

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
  const anchorId = useId();

  return (
    <div className={`flex flex-col mb-10 xl:mb-0 space-y-5 ${isRight ? 'xl:flex-row-reverse' : 'xl:flex-row'} w-full overflow-hidden ${className} font-pretendard`}>
      {/* Image Section */}
      <div
        id={anchorId}
        className={`relative w-full xl:w-1/2 h-auto ${isBackground ? 'bg-[#303030]' : ''}`}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Image
          src={imageSrc}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center w-full xl:w-1/2 p-0 xl:p-16 xl:pr-24">
        <h3
          className="text-[20px] xl:text-[40px] font-bold text-white mb-3 xl:mb-6 font-pretendard"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-anchor={`#${anchorId}`}
        >
          {title}
        </h3>
        {Array.isArray(description) ? (
          <ul
            className="text-gray-400 text-[12px] xl:text-[20px] leading-relaxed font-pretendard list-disc pl-5 space-y-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-anchor={`#${anchorId}`}
          >
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <div
            className="text-gray-400 text-[12px] xl:text-[20px] leading-relaxed flex flex-col font-pretendard"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-anchor={`#${anchorId}`}
          >
            {
              description.split('\n').map((line, idx) => (
                <div
                  className="flex flex-row"
                  key={idx}>
                  {
                    description.split('\n').length > 1 &&
                    <div>
                      •&nbsp;&nbsp;
                    </div>
                  }
                  <div className="flex-1 whitespace-pre-line">
                    {line}
                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}
