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

      <div className="relative flex items-center mt-[50px] xl:mt-[100px] min-h-[80vh]">
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
          <h1 className="text-white font-aldrich md:text-[80px] text-[40px] leading-tight mb-6 md:text-start text-center">
            {tHero("titleLine1")}<br />
            {tHero("titleLine2")}
          </h1>
          <p className="text-white font-pretendard md:text-[30px] text-[15px] leading-relaxed mb-20 md:text-start text-center">
            {tHero("descriptionLine1")}<br />
            {tHero("descriptionLine2")}
          </p>
          <Link
            href="/about-us"
            className="w-full xl:w-auto text-center inline-block bg-[#FFD900] text-black font-aldrich md:text-[24px] text-[20px] px-10 xl:py-4 py-2 hover:bg-[#ffe033] transition-colors"
          >
            {tMenu("about-us")}
          </Link>
        </div>
      </div>

      <div className='content-container xl:py-50 py-20'>
        <div className='w-full flex xl:flex-row flex-col'>
          <div className='font-pretendard font-semibold md:text-[40px] text-[20px] xl:pe-40 whitespace-nowrap'>
            {tMission("titleLine1")}
            <br className="xl:block hidden" />
            <span className="xl:hidden inline">&nbsp;</span>
            {tMission("titleLine2")}
          </div>
          <div className='font-pretendard md:text-[20px] text-[12px] leading-relaxed xl:pe-10 mt-5 xl:mt-0'>
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

      <div className='content-container xl:my-60 my-30'>
        <div className='w-full'>
          <Image
            src="/assets/main/main-associates.png"
            width={1920}
            height={300}
            alt={tImages("associates")}
            className="w-full h-auto hidden xl:block"
          />
          <Image
            src="/assets/main/main-associates-mobile.png"
            width={1920}
            height={300}
            alt={tImages("associates")}
            className="w-full h-auto block xl:hidden"
          />
        </div>
      </div>

      <TechnologyIntroductionCarousel />

      <section className="content-container py-10 xl:py-40">
        <div className="font-pretendard font-semibold text-white text-[20px] md:text-[40px]">
          {tTech("title")}
        </div>

        <div className="mt-10 flex flex-col xl:flex-row gap-12 items-start">
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
              <div className="font-pretendard font-semibold text-white text-[20px] md:text-[35px]">
                {tTech("developmentCapability.title")}
              </div>
              <div className="mt-1 xl:mt-2 font-pretendard font-medium text-white/60 text-[12px] md:text-[20px] leading-relaxed">
                {tTech("developmentCapability.description")}
              </div>

              <div className="mt-4 xl:mt-8 font-pretendard font-semibold text-white text-[20px] md:text-[35px]">
                {tTech("rdFocus.title")}
              </div>
              <div className="mt-1 xl:mt-2 font-pretendard font-medium text-white/60 text-[12px] md:text-[20px] leading-relaxed">
                {tTech("rdFocus.description")}
              </div>

              <div className="mt-4 xl:mt-8 font-pretendard font-semibold text-white text-[20px] md:text-[35px]">
                {tTech("reliability.title")}
              </div>
              <div className="mt-1 xl:mt-2 font-pretendard font-medium text-white/60 text-[12px] md:text-[20px] leading-relaxed">
                {tTech("reliability.description")}
              </div>

              <div className="mt-4 xl:mt-8 font-pretendard font-semibold text-white text-[20px] md:text-[35px]">
                {tTech("collaborationAgility.title")}
              </div>
              <div className="mt-1 xl:mt-2 font-pretendard font-medium text-white/60 text-[12px] md:text-[20px] leading-relaxed">
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
