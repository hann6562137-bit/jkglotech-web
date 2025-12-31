"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";

type ProductListItem = {
  title: string;
  description?: string;
  bullets?: string[];
  imageSrc: string;
  href: string;
};

function ProductListRow({ item, reverse }: { item: ProductListItem; reverse?: boolean }) {
  return (
    <div className="grid grid-cols-2 items-center gap-16">
      {/* Image (50%) */}
      <div
        className={`w-full ${reverse ? "order-2" : "order-1"}`}
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
      <div className={`w-full pt-20 ${reverse ? "order-1" : "order-2"}`}>
        <div className="font-pretendard font-semibold text-white text-[40px] leading-tight">{item.title}</div>

        {item.description && (
          <div className="mt-4 font-pretendard text-medium text-white/50 text-[20px] leading-relaxed whitespace-pre-line">
            {item.description}
          </div>
        )}

        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-4 list-disc pl-5 space-y-2 font-pretendard text-white/50 text-[20px]">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        <Link
          href={item.href}
          className="inline-flex items-center justify-center mt-8 bg-[#FFD900] text-black font-pretendard text-[20px] font-semibold px-14 py-4 hover:bg-[#ffe033] transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function ProductListSection() {
  const productList: ProductListItem[] = [
    {
      title: "FR Workwear",
      description: "Workwear that can protect workers from instantaneous Flash Fire (flame).",
      bullets: [
        "Flash Fire Protection",
        "Electric Arc Protection",
        "Heat Protection",
        "Molten Metal Splash Protection",
      ],
      imageSrc: "/assets/main/main-product-list-1.png",
      href: "/products/thermal/garment",
    },
    {
      title: "Bulletproof vest",
      description:
        "Developed by DuPont in 2023, this ballistic material delivers 30% higher\nstrength than standard aramids. It’s certified to Korean licensing\nstandards, meets NIJ 0101.06 Level 3A,\nand complies with MIL-STD-662F V50 ≥ 560 m/s.",
      imageSrc: "/assets/main/main-product-list-2.png",
      href: "/products/body-armor/bulletproof-vest",
    },
    {
      title: "Equipment & Accessories",
      bullets: [
        "Equipment : Rescue Intellitech – Decon Washer/ EV Fire Suppression Tank",
        "F.R & ARC : Balaclava&buff, Gloves, Shoes made with Nomex®, Kevlar®",
        "Cut Resistance : Gloves, Shoes made with Nomex®, Kevlar®",
      ],
      imageSrc: "/assets/main/main-product-list-3.png",
      href: "/products/equipment/ev-tank",
    },
  ];

  return (
    <div className="bg-[#121319] mt-20 py-50">
      <div className="content-container">
        <div className="text-center font-pretendard font-semibold text-[40px] text-white">Products List</div>

        <div className="flex flex-col gap-24">
          <ProductListRow item={productList[0]} />
          <ProductListRow item={productList[1]} reverse />
          <ProductListRow item={productList[2]} />
        </div>
      </div>
    </div>
  );
}
