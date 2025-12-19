"use client";

import AOSInitProvider from '@/components/AOSInitProvider';
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from 'next/image';

function ContentSection() {
    // const t = useTranslations("Main.MainPage");

    return (
        <div className="min-h-screen bg-black">

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
                        Our<br />
                        Company
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

            <div className='bg-[#121319] content-container mt-20 py-25'>
                <div className='mt-20 text-center font-pretendard font-semibold text-[40px]'>
                    Products List
                </div>
                <div className='w-full flex flex-row'>
                    <div className='w-[40%] aspect-[639/431]'>
                        <div className='w-full h-full bg-[#303030]'>

                        </div>
                    </div>
                    <div className='w-[60%]'>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MainPage() {
    return (
        <AOSInitProvider>
            <ContentSection />
        </AOSInitProvider>
    );
}
