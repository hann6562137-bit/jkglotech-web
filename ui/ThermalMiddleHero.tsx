"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ThermalMiddleHeroProps {
  imageSrc: string;
  alt: string;
  children: ReactNode;
}

export default function ThermalMiddleHero({
  imageSrc,
  alt,
  children,
}: ThermalMiddleHeroProps) {
  return (
    <div className="w-full">
      <div className="content-container relative">
        <Image
          src={imageSrc}
          alt={alt}
          width={1920}
          height={1080}
          className="z-0 xl:w-full xl:h-auto w-full xl:aspect-auto aspect-[5/4] object-cover"
        />
        <div className="xl:hidden block z-10 absolute inset-0 bg-black opacity-50">

        </div>
        <div className="z-20 absolute inset-0 flex items-center justify-center p-4 xl:w-full w-[80%] mx-auto">
          <p
            className="text-white font-aldrich text-[15px] xl:text-[32px] text-center leading-relaxed drop-shadow-md"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
