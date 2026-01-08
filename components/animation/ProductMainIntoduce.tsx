"use client";
import Image from "next/image";
import RadialRingsSVG from "./RadialFade";
import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 1280) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export default function ProductMainIntoduce({ src, mobileSrc, mobileText }: { src: string, mobileSrc: string, mobileText: string }) {
  // Viewport 너비 지정
  const isMobile = useIsMobile(1280);
  if (!isMobile) {
    return (
      <div className="w-full relative">
        <Image
          src={src}
          alt="Product Main Introduce"
          width={1920}
          height={600}
          className="w-full h-auto relative! z-20!" />
        <div className="w-full h-full absolute top-0 left-0 bg-[#121319] z-0" />
        <div className="h-full absolute top-0 left-[5%] flex items-center justify-center z-10">
          <div className="h-[80%]">
            <RadialRingsSVG />
          </div>
        </div>
      </div>);
  } else {
    return (
      <div className="w-full bg-[#121319] pb-20">
        <div className="w-full relative">
          <Image
            src={mobileSrc}
            alt="Product Main Introduce"
            width={1920}
            height={600}
            className="w-full h-auto relative! z-20!" />
          <div className="h-full absolute top-0 left-0 right-0 w-full flex items-center justify-center z-10">
            <div className="h-[80%]">
              <RadialRingsSVG />
            </div>
          </div>
        </div>
        <div className="px-5">
          <object
            data={mobileText}
            type="image/svg+xml"
            className="mt-5 relative z-20 md:w-[300px] md:mx-auto"
          />
        </div>
      </div>
    );
  }
}