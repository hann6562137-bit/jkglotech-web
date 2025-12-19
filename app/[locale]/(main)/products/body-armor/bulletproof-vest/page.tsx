import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import Banner from "@/ui/banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";

import { Link } from "@/i18n/routing";

export default function BulletproofVestPage() {
    return (
        <div className="mt-[100px]">
            <Banner
                title="Bulletproof Vest"
                bgSrc="/assets/banners/bulletproof-vest-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="bulletproof-vest" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/bulletproof-vest-top.png"
                        alt="Bulletproof Vest"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    Bullet proof Vest<br />
                    Tylo - 4500W
                </div>

            </div>
            <div className="w-full bg-[#121319]">
                <div className="w-full max-w-[1920px] mx-auto ">
                    <ProductMainIntoduce src="/assets/products/bulletproof-vest-intro.png" />
                </div>
            </div>
            <div className="content-container flex flex-col">
                <div className="mt-50 mb-30 font-aldrich text-[40px] mx-auto text-center">
                    Material Durability
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-40">
                    <CircularProgress
                        percentage={30}
                        value={30}
                        suffix="%"
                        title={`Enhanced ballistic\nmaterial strength`}
                        description={`30% higher strength\ncompared to conventional\naramid`}
                    />
                    <CircularProgress
                        percentage={15}
                        value={10}
                        suffix="s"
                        title={`Quick Disassembly`}
                        description={`Can be disassembled\nwithin 10 seconds`}
                    />
                    <CircularProgress
                        percentage={66}
                        value={150}
                        mode="time"
                        title={`Quick Assembly`}
                        description={`Can be reassembled within\n2 minutes and 30 seconds`}
                    />
                    <CircularProgress
                        percentage={30}
                        value={30}
                        suffix="%"
                        title={`Advanced Fabrication`}
                        description={`Kevlar® woven fabric\npressed with phenol\nprepreg ensures precision\nand uniform quality`}
                    />
                </div>
                <div className="flex flex-col gap-[2px] mt-50 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/bulletproof-vest-feature-2.png"
                        title="Advanced Lightweight Material"
                        description={`The latest material officially launched by DuPont in the U.S. on April 13, 2023.
It is supplied to two Asian countries as well as the U.S. and the U.K., offering outstanding flexibility.`}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/bulletproof-vest-feature-3.png"
                        title="Quick Disassembly and Assembly"
                        description="Can be disassembled within 10 seconds and reassembled within 2 minutes and 30 seconds."
                    />
                    <FeatureCard
                        imageSrc="/assets/products/bulletproof-vest-feature-4.png"
                        title="Rapid Rescue Readiness"
                        description="Ensures sufficient time for rapid response and evacuation in emergency situations."
                    />
                </div>
            </div>
            <div className="w-full relative">
                <Image
                    src="/assets/products/bulletproof-vest-bottom.png"
                    alt="Bulletproof Vest"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="text-white font-aldrich text-[24px] md:text-[32px] text-center leading-relaxed drop-shadow-md">
                        Even on the battlefield, our reliable military-grade bulletproof vest delivers<br />
                        powerful protection and unwavering stability
                    </p>
                </div>
            </div>
            <div className="w-full bg-black mt-[300px] mb-[300px] flex flex-col items-center justify-center text-center px-4">
                <p className="text-white font-pretendard text-[50px] mb-10 font-semibold">
                    Discover trusted ballistic protection.
                </p>
                <Link
                    href="/about-us"
                    className="bg-[#FFD900] text-black font-pretendard px-20 py-4 text-[35px] font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
                >
                    About us <span className="ml-2 text-xl">→</span>
                </Link>
            </div>
        </div>
    );
}