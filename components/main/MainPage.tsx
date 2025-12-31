"use client";

import { Link } from "@/i18n/routing";
import Image from 'next/image';
import ProductListSection from "@/components/main/ProductListSection";
import TechnologyIntroductionCarousel from "@/components/main/TechnologyIntroductionCarousel";
import CorporatePhilosophy from "@/components/main/CorporatePhilosophy";
import BottomImageMarquee from "@/components/main/BottomImageMarquee";

function ContentSection() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">

      <div className="relative flex items-center mt-[100px] min-h-[80vh] bg-gray-500">
        <div className="content-container">
          <h1 className="text-white font-aldrich text-[80px] leading-tight mb-6">
            Flame Resistant<br />
            Wearwear
          </h1>
          <p className="text-white font-pretendard text-[30px] leading-relaxed mb-20">
            We provide one-stop custom FR garment development and production.<br />
            Experience global-standard FR PPE with JK Glotech.
          </p>
          <Link
            href="/about-us"
            className="inline-block bg-[#FFD900] text-black font-pretendard text-[24px] font-semibold px-10 py-4 hover:bg-[#ffe033] transition-colors"
          >
            About us
          </Link>
        </div>
      </div>

      <div className='content-container-content py-50'>
        <div className='w-full flex flex-row'>
          <div className='font-pretendard font-semibold text-[40px] pe-10'>
            Mission
            <br />
            Statement
          </div>
          <div className='font-pretendard text-[20px] leading-relaxed pe-10'>
            {`JK GLOTECH specializes in Meta- and Para-Aramid material R&D, overseeing the full process from fiber to finished garments. For nearly 20 years, we’ve partnered with leading companies to advance the flame-resistant market.\nDriven by the needs of Firefighting, Oil & Gas, Industrial, Chemical, and Military sectors, we ensure reliable solutions through strict global standards and testing. Experience true Global Standards with JK GLOTECH.`}
          </div>
        </div>
        <div className='w-full mt-10'>
          <Image
            src="/assets/main/main-1.png"
            width={1920}
            height={1000}
            alt="Main Image"
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
            alt="Associates"
            className="w-full h-auto"
          />
        </div>
      </div>

      <TechnologyIntroductionCarousel />

      <section className="content-container py-40">
        <div className="font-pretendard font-semibold text-white text-[40px]">
          Technological Innovation
        </div>

        <div className="mt-10 flex flex-row gap-12 items-start">
          <div className="flex-3/5">
            <Image
              src="/assets/main/technological-innovation.png"
              width={1040}
              height={780}
              alt="Technological Innovation"
              className="w-full h-auto"
              priority={false}
            />
          </div>

          <div className="flex-2/5 pt-6">
            <div className="flex flex-col space-y-2">
              <div className="font-pretendard font-semibold text-white text-[35px]">
                Development Capability
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                We comply with international standards and customize workwear to meet customer needs.
              </div>

              <div className="mt-8 font-pretendard font-semibold text-white text-[35px]">
                R&D Focus
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                We deliver high value solutions through strategic R&D investment and prioritization of market demands.
              </div>

              <div className="mt-8 font-pretendard font-semibold text-white text-[35px]">
                Reliability
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                We secure the reliability of test results through repeated sample tests by accredited testing institutes.
              </div>

              <div className="mt-8 font-pretendard font-semibold text-white text-[24px]">
                Collaboration & Agility
              </div>
              <div className="mt-2 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
                The vertical integration system from materials to finished products has made it possible to respond quickly.
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
