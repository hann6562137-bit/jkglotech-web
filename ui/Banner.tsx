"use client";
import { useIsMobile } from "@/components/animation/ProductMainIntoduce";
import Image from "next/image";

export default function Banner({
  title,
  bgSrc,
  mobileBgSrc,
  description,
  aspect,
  direction = 'center'
}: {
  title: string;
  bgSrc: string;
  mobileBgSrc?: string;
  description?: string;
  aspect?: string;
  direction?: 'left' | 'right' | 'center';
}) {
  const isMobile = useIsMobile(1280);
  // Determine container classes based on direction
  let containerClasses = "h-full flex flex-col justify-center";

  if (direction === 'right') {
    containerClasses += " w-1/2 text-left ms-auto items-start pl-10"; // Added items-start and padding for better visuals if strictly text-left
  } else if (direction === 'left') {
    containerClasses += " w-1/2 text-right me-auto items-end pr-10"; // Added items-end and padding
  } else {
    containerClasses += " w-full left-0 items-center text-center";
  }

  return (
    <div className="relative w-full">
      {
        isMobile ? (
          <Image
            src={mobileBgSrc ?? bgSrc}
            alt="Banner Background"
            width={1920}
            height={600}
            className={`xl:w-full xl:h-auto xl:aspect-auto ${aspect ?? aspect} w-full h-auto object-cover`}
          />
        ) : (
          <Image
            src={bgSrc}
            alt="Banner Background"
            width={1920}
            height={600}
            className={`xl:w-full xl:h-auto xl:aspect-auto ${aspect ?? aspect} w-full h-auto object-cover`}
          />
        )
      }
      <div className="absolute w-full h-full top-0 left-0">
        <div className={containerClasses}>
          <h1 className={`${description ? 'text-[20px] xl:text-[50px]' : 'text-[20px] xl:text-[70px]'} font-aldrich`}>{title}</h1>
          <br />
          {description &&
            <p className={`xl:px-0 px-5 max-w-[700px] text-gray-400 font-pretendard text-[10px] xl:text-[25px] xl:whitespace-pre-line ${direction === 'center' ? 'text-center' : ''}`}>
              {description}
            </p>
          }
        </div>
      </div>
    </div>
  );
}
