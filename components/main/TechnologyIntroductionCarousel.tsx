"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type TechCard = {
  title: string;
  description: string;
  imageSrc: string;
};

function CarouselCard({ card }: { card: TechCard }) {
  return (
    <div className="w-full bg-[#292B36] aspect-square xl:aspect-20/9 overflow-hidden">
      <div className="h-full w-full flex flex-col xl:flex-row">
        {/* Left text panel */}
        <div className="basis-2/5 bg-black/20 xl:p-15 p-5 flex flex-col xl:justify-between xl:order-1 order-2">
          <div className="font-pretendard font-semibold text-white text-[12px] xl:text-[40px] leading-tight whitespace-pre-line">
            {card.title}
          </div>
          <div className="font-pretendard text-white/50 leading-relaxed font-medium text-[10px] xl:text-[20px]">{card.description}</div>
        </div>

        {/* Right image panel */}
        <div className="basis-3/5 relative xl:order-2 order-1">
          <Image src={card.imageSrc} alt={card.title} fill className="object-cover object-center" priority={false} />
        </div>
      </div>
    </div>
  );
}

export default function TechnologyIntroductionCarousel() {
  const t = useTranslations("main.technologyIntro");

  const cards = useMemo<TechCard[]>(
    () => [
      {
        title: t("cards.card1.title"),
        description: t("cards.card1.description"),
        imageSrc: "/assets/main/intro-1.png",
      },
      {
        title: t("cards.card3.title"),
        description: t("cards.card3.description"),
        imageSrc: "/assets/main/intro-3.png",
      },
      {
        title: t("cards.card4.title"),
        description: t("cards.card4.description"),
        imageSrc: "/assets/main/intro-4.png",
      },
    ],
    [t],
  );

  // Center align + partial slide width enables left/right peeking while keeping the section centered.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    const id = requestAnimationFrame(onSelect);
    return () => {
      cancelAnimationFrame(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // auto-play (simple)
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="xl:py-40 py-0 overflow-x-hidden">
      {/* parent container owns content-container */}
      <div className="content-container">
        <div className="flex items-center justify-between">
          <div className="font-pretendard font-semibold text-white xl:text-[40px] text-[20px] xl:ms-8">{t("sectionTitle")}</div>

          <div className="hidden xl:flex items-center gap-2 me-8">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="h-16 w-16 bg-[#292B36] text-white cursor-pointer text-4xl"
              aria-label={t("prevButtonLabel")}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="h-16 w-16 bg-[#292B36] text-white cursor-pointer text-4xl"
              aria-label={t("nextButtonLabel")}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="content-container">
          {/* Embla viewport */}
          <div className="overflow-visible" ref={emblaRef}>
            {/* Embla container */}
            <div className="flex">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="shrink-0 basis-[99%] xl:px-5 px-2"
                >
                  <CarouselCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="px-5 xl:px-0 mt-2 xl:mt-3 flex justify-center">
          <div className="flex items-center">
            {cards.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => emblaApi?.scrollTo(idx)}
                className="cursor-pointer flex flex-row"
                aria-label={t("goToSlide", { index: idx + 1 })}
              >
                <div
                  className={`inset-0 h-1 w-20 my-5 xl:mx-2 mx-0.5 transition-opacity ${selectedIndex === idx ? "bg-[#FFD900]" : "bg-white/20"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
