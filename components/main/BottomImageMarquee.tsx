"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type MarqueeImage = {
  src: string;
  heightClass: string;
  altKey: string;
};

export default function BottomImageMarquee() {
  const t = useTranslations("main.bottomMarquee");

  // Placeholder images for now (swap to real ones later)
  const images: MarqueeImage[] = [
    { src: "/assets/main/bottom-1.png", heightClass: "xl:h-[493px] h-[164px]", altKey: "alt1" },
    { src: "/assets/main/bottom-2.png", heightClass: "xl:h-[565px] h-[188px]", altKey: "alt2" },
    { src: "/assets/main/bottom-3.png", heightClass: "xl:h-[714px] h-[238px]", altKey: "alt3" },
    { src: "/assets/main/bottom-4.png", heightClass: "xl:h-[472px] h-[157px]", altKey: "alt4" },
    { src: "/assets/main/bottom-5.png", heightClass: "xl:h-[714px] h-[238px]", altKey: "alt5" },
    { src: "/assets/main/bottom-6.png", heightClass: "xl:h-[555px] h-[185px]", altKey: "alt6" },
    { src: "/assets/main/bottom-7.png", heightClass: "xl:h-[500px] h-[166px]", altKey: "alt7" },
    { src: "/assets/main/bottom-8.png", heightClass: "xl:h-[653px] h-[217px]", altKey: "alt8" },
  ];

  const trackImages = [...images, ...images];

  return (
    <section className="w-full overflow-x-hidden mt-10 xl:mt-40 mb-20 xl:mb-60">
      <div className="jk-marquee">
        <div className="jk-marquee__track flex items-start gap-2">
          {trackImages.map((img, idx) => (
            <div key={`${img.src}-${idx}`} className="shrink-0">
              <Image
                src={img.src}
                alt={t(img.altKey)}
                width={1600}
                height={900}
                className={`w-auto ${img.heightClass} object-cover`}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
