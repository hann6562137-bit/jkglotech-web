"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ProductListSection from "@/components/main/ProductListSection";
import TechnologyIntroductionCarousel from "@/components/main/TechnologyIntroductionCarousel";
import CorporatePhilosophy from "@/components/main/CorporatePhilosophy";
import BottomImageMarquee from "@/components/main/BottomImageMarquee";

function ContentSection() {
  const tHero = useTranslations("main.hero");
  const tMission = useTranslations("main.mission");
  const tImages = useTranslations("main.images");
  const tTech = useTranslations("main.techInnovation");
  const tMenu = useTranslations("menu");

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">

      <div className="relative flex items-center mt-[100px] min-h-[80vh]">
        <div className="absolute w-full h-full ">
          <video
            src="/video/background.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content-container z-10">
          <h1 className="text-white font-aldrich text-[80px] leading-tight mb-6">
            {tHero("titleLine1")}<br />
            {tHero("titleLine2")}
          </h1>
          <p className="text-white font-pretendard text-[30px] leading-relaxed mb-20">
            {tHero("descriptionLine1")}<br />
            {tHero("descriptionLine2")}
          </p>
          <Link
            href="/about-us"
            className="inline-block bg-[#FFD900] text-black font-pretendard text-[24px] font-semibold px-10 py-4 hover:bg-[#ffe033] transition-colors"
          >
            {tMenu("about-us")}
          </Link>
        </div>
      </div>

      <div className='content-container-content py-50'>
        <div className='w-full flex flex-row'>
          <div className='font-pretendard font-semibold text-[40px] pe-10'>
            {tMission("titleLine1")}
            <br />
            {tMission("titleLine2")}
          </div>
          <div className='font-pretendard text-[20px] leading-relaxed pe-10'>
            {tMission("body")}
          </div>
        </div>
        <div className='w-full mt-10'>
          <Image
            src="/assets/main/main-1.png"
            width={1920}
            height={1000}
            alt={tImages("main")}
            className="w-full h-auto"
          />
        </div>
      </div>

      <ProductListSection />

      <div className='content-container my-60'>
        <div className='w-full'>
          <Image
            src="/assets/main/main-associates.png"
            width={1920}
            height={300}
            alt={tImages("associates")}
            className="w-full h-auto"
          />
        </div>
      </div>

      <TechnologyIntroductionCarousel />

      <section className="content-container py-40">
        <div className="font-pretendard font-semibold text-white text-[40px]">
          {tTech("title")}
        </div>

        <div className="mt-10 flex flex-row gap-12 items-start">
          <div className="flex-3/5">
            <Image
              src="/assets/main/technological-innovation.png"
              width={1040}
              height={780}
              alt={tTech("imageAlt")}
              className="w-full h-auto"
              priority={false}
            />
          </div>

          <div className="flex-2/5 pt-6">
            <div className="flex flex-col space-y-2">
              <div className="font-pretendard font-semibold text-white text-[35px]">
                {tTech("developmentCapability.title")}
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                {tTech("developmentCapability.description")}
              </div>

              <div className="mt-8 font-pretendard font-semibold text-white text-[35px]">
                {tTech("rdFocus.title")}
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                {tTech("rdFocus.description")}
              </div>

              <div className="mt-8 font-pretendard font-semibold text-white text-[35px]">
                {tTech("reliability.title")}
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                {tTech("reliability.description")}
              </div>

              <div className="mt-8 font-pretendard font-semibold text-white text-[24px]">
                {tTech("collaborationAgility.title")}
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                {tTech("collaborationAgility.description")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporatePhilosophy />

      <BottomImageMarquee />

      
    </div>
  );
}

export default function MainPage() {
  return <ContentSection />;
}
