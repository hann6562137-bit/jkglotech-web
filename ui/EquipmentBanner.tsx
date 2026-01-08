"use client";

import { useIsMobile } from "@/components/animation/ProductMainIntoduce";
import Image from "next/image";

export default function EquipmentBanner({
  title,
  bgSrc,
  mobileBgSrc,
  description,
}: {
  title: string;
  bgSrc: string;
  mobileBgSrc?: string;
  description?: string;
}) {
  const isMobile = useIsMobile(1280);

  return (
    <div className="relative w-full bg-[#292B36]">
      {
        isMobile ? (
          <Image
            src={mobileBgSrc ?? bgSrc}
            alt="Banner Background"
            width={1920}
            height={600}
            className={`xl:w-full xl:h-auto w-full h-auto object-cover`}
          />
        ) : (
          <Image
            src={bgSrc}
            alt="Banner Background"
            width={1920}
            height={600}
            className={`xl:w-full xl:h-auto w-full h-auto object-cover`}
          />
        )
      }
      <div className="absolute w-full h-full top-0 left-0 xl:px-0 px-5">
        <div className="ms-auto w-1/2 flex flex-col justify-center h-full">
          <div className="xl:ps-20 w-full max-w-[700px]">
            <h1 className={`text-[18px] xl:text-[50px] font-aldrich mb-1 xl:mb-3`}>{title}</h1>
            {description &&
              <p className={`text-gray-400 font-pretendard text-[10px] xl:text-[25px] xl:whitespace-pre-line`}>
                {description}
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
