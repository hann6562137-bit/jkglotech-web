"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type PhilosophyCard = {
  iconSrc: string;
  title: string;
  description: string;
};

function PhilosophyCardItem({ card }: { card: PhilosophyCard }) {
  return (
    <div className="bg-[#121319] px-3 xl:px-10 py-5 xl:py-20 border border-white/5">
      <Image src={card.iconSrc} alt={card.title} width={71} height={71} className="h-7 w-7 xl:h-[71px] xl:w-[71px]" />
      <div className="mt-4 xl:mt-8 font-pretendard font-semibold text-white text-[12px] xl:text-[30px] leading-tight whitespace-pre-line">
        {card.title}
      </div>
      <div className="mt-1 xl:mt-3 font-pretendard font-medium text-white/60 text-[8px] xl:text-[20px] leading-relaxed">
        {card.description}
      </div>
    </div>
  );
}

export default function CorporatePhilosophy() {
  const t = useTranslations("main.corporatePhilosophy");

  const cards: PhilosophyCard[] = [
    {
      iconSrc: "/assets/main/Globe.png",
      title: t("cards.card1.title"),
      description: t("cards.card1.description"),
    },
    {
      iconSrc: "/assets/main/Compass.png",
      title: t("cards.card2.title"),
      description: t("cards.card2.description"),
    },
    {
      iconSrc: "/assets/main/Data.png",
      title: t("cards.card3.title"),
      description: t("cards.card3.description"),
    },
    {
      iconSrc: "/assets/main/Users_Group.png",
      title: t("cards.card4.title"),
      description: t("cards.card4.description"),
    },
    {
      iconSrc: "/assets/main/First_Aid.png",
      title: t("cards.card5.title"),
      description: t("cards.card5.description"),
    },
    {
      iconSrc: "/assets/main/Chat_Dots.png",
      title: t("cards.card6.title"),
      description: t("cards.card6.description"),
    },
  ];

  return (
    <section className="content-container py-20 xl:py-40">
      <div className="font-pretendard font-semibold text-white text-[20px] xl:text-[40px]">{t("sectionTitle")}</div>
      <div className="mt-10 grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6">
        {cards.map((card) => (
          <PhilosophyCardItem key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
