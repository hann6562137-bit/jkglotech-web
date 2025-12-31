"use client";

import Image from "next/image";

type MarqueeImage = {
  src: string;
  alt: string;
  heightClass: string;
};

export default function BottomImageMarquee() {
  // Placeholder images for now (swap to real ones later)
  const images: MarqueeImage[] = [
    { src: "/assets/main/bottom-1.png", alt: "Marquee 1", heightClass: "h-[493px]" },
    { src: "/assets/main/bottom-2.png", alt: "Marquee 2", heightClass: "h-[565px]" },
    { src: "/assets/main/bottom-3.png", alt: "Marquee 3", heightClass: "h-[714px]" },
    { src: "/assets/main/bottom-4.png", alt: "Marquee 4", heightClass: "h-[472px]" },
    { src: "/assets/main/bottom-5.png", alt: "Marquee 5", heightClass: "h-[714px]" },
    { src: "/assets/main/bottom-6.png", alt: "Marquee 6", heightClass: "h-[555px]" },
    { src: "/assets/main/bottom-7.png", alt: "Marquee 7", heightClass: "h-[500px]" },
    { src: "/assets/main/bottom-8.png", alt: "Marquee 8", heightClass: "h-[653px]" },
  ];

  const trackImages = [...images, ...images];

  return (
    <section className="w-full overflow-x-hidden mt-40 mb-60">
      <div className="jk-marquee">
        <div className="jk-marquee__track flex items-start gap-2">
          {trackImages.map((img, idx) => (
            <div key={`${img.src}-${idx}`} className="shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
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
