"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type ProductListItem = {
  title: string;
  description?: string;
  bullets?: string[];
  imageSrc: string;
  href: string;
};

function ProductListRow({ item, reverse }: { item: ProductListItem; reverse?: boolean }) {
  const tCommon = useTranslations("common");

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-2 xl:gap-16">
      {/* Image (50%) */}
      <div
        className={`w-full order-1 ${reverse ? "xl:order-2" : "xl:order-1"}`}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={1500}
          height={1000}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>

      {/* Text (50%) */}
      <div className={`w-full pt-5 xl:pt-20 order-1 ${reverse ? "xl:order-1" : "xl:order-2"}`}>
        <div className="font-pretendard font-semibold text-white xl:text-[40px] text-[20px] leading-tight">{item.title}</div>

        {item.description && (
          <div className="mt-4 font-pretendard text-medium text-white/50 xl:text-[20px] text-[12px] leading-relaxed whitespace-pre-line">
            {item.description}
          </div>
        )}

        {item.bullets && item.bullets.length > 0 && item.bullets[0] != "" && (
          <ul className="mt-4 list-disc pl-5 space-y-2 font-pretendard text-white/50 xl:text-[20px] text-[12px]">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        <Link
          href={item.href}
          className="xl:w-auto w-full inline-flex items-center justify-center mt-16 xl:mt-8 bg-[#FFD900] text-black font-pretendard text-[20px] font-semibold xl:px-14 xl:py-4 py-2 hover:bg-[#ffe033] transition-colors"
        >
          {tCommon("learnMore")}
        </Link>
      </div>
    </div>
  );
}

export default function ProductListSection() {
  const t = useTranslations("main.productListSection");

  const productList: ProductListItem[] = [
    {
      title: t("cards.frWorkwear.title"),
      description: t("cards.frWorkwear.description"),
      bullets: t("cards.frWorkwear.bullet").split("\n"),
      imageSrc: "/assets/main/main-product-list-1.png",
      href: "/products/thermal/garment",
    },
    {
      title: t("cards.bulletproofVest.title"),
      description: t("cards.bulletproofVest.description"),
      bullets: t("cards.bulletproofVest.bullet").split("\n"),
      imageSrc: "/assets/main/main-product-list-2.png",
      href: "/products/body-armor/bulletproof-vest",
    },
    {
      title: t("cards.equipmentAccessories.title"),
      bullets: [
        t("cards.equipmentAccessories.bullet1"),
        t("cards.equipmentAccessories.bullet2"),
        t("cards.equipmentAccessories.bullet3"),
      ],
      imageSrc: "/assets/main/main-product-list-3.png",
      href: "/products/equipment/ev-tank",
    },
  ];

  return (
    <div className="bg-[#121319] mt-20 xl:py-50 py-20">
      <div className="content-container">
        <div className="text-center font-pretendard font-semibold xl:text-[40px] text-[20px] text-white">{t("title")}</div>

        <div className="flex flex-col gap-24">
          <ProductListRow item={productList[0]} />
          <ProductListRow item={productList[1]} reverse />
          <ProductListRow item={productList[2]} />
        </div>
      </div>
    </div>
  );
}
