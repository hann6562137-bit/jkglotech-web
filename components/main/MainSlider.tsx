"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const images = [
    "/assets/main/main1.png",
    "/assets/main/main2.png",
    "/assets/main/main3.png",
    "/assets/main/main4.png",
];

const imagesMobile = [
    "/assets/main/main1-mobile.png",
    "/assets/main/main2-mobile.png",
    "/assets/main/main3-mobile.png",
    "/assets/main/main4-mobile.png",
];

function Card({ src }: { src: string }) {
    return (
        <div
            className="flex-[0_0_100%] w-screen relative flex items-center justify-center h-[400px] lg:max-h-[calc(100vh-92px)] lg:h-full"
        >
            <Image
                src={src}
                alt="Slide"
                width={3840}
                height={2160}
                className="h-full w-auto object-cotain"
                quality={100}
                priority
            />
        </div>
    );
}

function MobileCard({ src }: { src: string }) {
    return (
        <div
            className="flex-[0_0_100%] w-screen flex items-center justify-center">
            <Image
                src={src}
                alt="Slide"
                width={3840}
                height={2160}
                className="w-full h-auto"
                quality={100}
                priority
            />
        </div>
    );
}

export default function MainSlider() {
    return (
        <div>
            <div className="hidden lg:block">
                <PCMainSlider />
            </div>
            <div className="block lg:hidden">
                <MobileMainSlider />
            </div>
        </div>
    );
}

function PCMainSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const t = useTranslations("Main.MainPage");

    // 자동 슬라이드
    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    // 현재 슬라이드 인덱스 업데이트
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        
        const id = requestAnimationFrame(onSelect);
        return () => cancelAnimationFrame(id);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* 오버레이 콘텐츠 */}
            <div className="absolute content-container inset-0 flex flex-col justify-center z-10 sm:left-[100px] 2xl:left-0">
                <Image
                    src={t("sloganSrc")}
                    alt="Slogan"
                    width={600}
                    height={100}
                    className="2xl:w-[600px] w-[400px] h-auto"
                />
                <Link 
                    href="/customer-support/contact"
                    className="mt-4 cursor-pointer">
                    <Image
                        src={t("orderButtonSrc")}
                        alt="Order Now"
                        width={600}
                        height={100}
                        className="2xl:w-[300px] w-[200px] h-auto"
                    />
                </Link>
            </div> 

            {/* 캐로셀 */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, idx) => (
                        <Card key={idx} src={src} />
                    ))}
                </div>
            </div>

            {/* 하단 점 네비게이션 */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => emblaApi?.scrollTo(idx)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${selectedIndex === idx ? "bg-white" : "bg-gray-300 opacity-50"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

function MobileMainSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const t = useTranslations("Main.MainPage");

    // 자동 슬라이드
    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    // 현재 슬라이드 인덱스 업데이트
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);

        const id = requestAnimationFrame(onSelect);
        return () => cancelAnimationFrame(id);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* 오버레이 콘텐츠 */}
            <div className="absolute z-10 w-full h-full top-0 left-0 p-6 flex flex-col">
                <Image
                    src={t("sloganSrc")}
                    alt="Slogan"
                    width={600}
                    height={100}
                    className="w-[65%] h-auto"
                />
                <Link 
                    href="/customer-support/contact"
                    className="mt-auto mb-6 cursor-pointer">
                    <Image
                        src={t("orderButtonMobileSrc")}
                        alt="Order Now"
                        width={600}
                        height={100}
                        className="w-full h-auto"
                    />
                </Link>
            </div>

            {/* 캐로셀 */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {imagesMobile.map((src, idx) => (
                        <MobileCard key={idx} src={src} />
                    ))}
                </div>
            </div>

            {/* 하단 점 네비게이션 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                {imagesMobile.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => emblaApi?.scrollTo(idx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${selectedIndex === idx ? "bg-white" : "bg-gray-300 opacity-50"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

