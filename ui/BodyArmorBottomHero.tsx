"use client";

import { useIsMobile } from "@/components/animation/ProductMainIntoduce";
import Image from "next/image";
import { ReactNode } from "react";

interface BodyArmorBottomHeroProps {
  imageSrc: string;
  alt: string;
  children: ReactNode;
  mobileImageSrc?: string;
}

export default function BodyArmorBottomHero({
  imageSrc,
  alt,
  children,
  mobileImageSrc,
}: BodyArmorBottomHeroProps) {
  const isMobile = useIsMobile(1280);

  return (
    <div className="w-full relative">
      {
        isMobile ? (
          <Image
            src={mobileImageSrc || imageSrc}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={alt}
            width={1920}
            height={1080}
              className="w-full h-auto"
          />
        )
      }
      <div 
        className="absolute w-full h-full top-0 left-0 z-10 bg-black/50 block xl:hidden"
        />
      <div className="absolute inset-0 flex items-center z-20 justify-center p-4">
        <p
          className="text-white font-aldrich text-[12px] md:text-[32px] text-center leading-relaxed drop-shadow-md"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {children}
        </p>
      </div>
    </div>
  );
}
