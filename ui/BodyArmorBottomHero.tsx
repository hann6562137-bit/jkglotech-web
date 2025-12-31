"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface BodyArmorBottomHeroProps {
  imageSrc: string;
  alt: string;
  children: ReactNode;
}

export default function BodyArmorBottomHero({
  imageSrc,
  alt,
  children,
}: BodyArmorBottomHeroProps) {
  return (
    <div className="w-full relative">
      <Image
        src={imageSrc}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <p
          className="text-white font-aldrich text-[24px] md:text-[32px] text-center leading-relaxed drop-shadow-md"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {children}
        </p>
      </div>
    </div>
  );
}
