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
    <div className="w-full bg-[#292B36] aspect-20/9 overflow-hidden">
      <div className="h-full w-full flex flex-col md:flex-row">
        {/* Left text panel */}
        <div className="basis-2/5 bg-black/20 p-15 flex flex-col justify-between">
          <div className="font-pretendard font-semibold text-white text-[40px] leading-tight whitespace-pre-line">
            {card.title}
          </div>
          <div className="font-pretendard text-white/50 text-sm leading-relaxed font-medium text-[20px]">{card.description}</div>
        </div>

        {/* Right image panel */}
        <div className="basis-3/5 relative">
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
        title: t("cards.card2.title"),
        description: t("cards.card2.description"),
        imageSrc: "/assets/main/intro-2.png",
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
    <section className="py-40 overflow-x-hidden">
      {/* parent container owns content-container */}
      <div className="content-container">
        <div className="flex items-center justify-between">
          <div className="font-pretendard font-semibold text-white text-[40px] ms-8">{t("sectionTitle")}</div>

          <div className="flex items-center gap-2 me-8">
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
                  className="shrink-0 basis-[99%] px-5"
                >
                  <CarouselCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="mt-3 flex justify-center">
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
                  className={`inset-0 h-1 w-20 my-5 mx-2 transition-opacity ${selectedIndex === idx ? "bg-[#FFD900]" : "bg-white/20"}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
