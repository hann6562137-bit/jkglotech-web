import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";

export default function PlateVestPage() {
    return (
        <div className="mt-[100px]">
            <Banner
                title="Plate"
                bgSrc="/assets/banners/plate-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="plate" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/plate-top.png"
                        alt="Plate"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    ToRo-2450 Ultralight<br />
                    Multi-Curve Ballistic Plate
                </div>

            </div>
            <div className="w-full bg-[#121319] mt-20">
                <div className="w-full max-w-[1920px] mx-auto ">
                    <ProductMainIntoduce src="/assets/products/plate-intro.png" />
                </div>
            </div>
            <div className="content-container flex flex-col">
                <div className="mt-50 mb-30 font-aldrich text-[40px] mx-auto text-center">
                    Material Durability
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-40">
                    <CircularProgress
                        percentage={25}
                        value={4.5}
                        suffix=" kg"
                        decimals={1}
                        title={`Weight Efficiency`}
                        description={`Optimized 4.5 kg/m²\nlightweight structure\ndelivering maximum\nprotection-to-weight\nperformance.`}
                    />
                    <CircularProgress
                        percentage={15}
                        value={15}
                        suffix="%"
                        title={`Lightweight Design`}
                        description={`Approximately 15% lighter\n(by area) compared to\nstandard Korean military\nballistic plates`}
                    />
                    <CircularProgress
                        percentage={20}
                        value={20}
                        suffix="%"
                        title={`Wearability`}
                        description={`Approximately 20% thinner\nthan standard Korean\nmilitary ballistic plates`}
                    />
                    <CircularProgress
                        percentage={100}
                        value={100}
                        suffix="%"
                        title={`Protection Level`}
                        description={`Certified NIJ Level IV\nprotection withstanding\nthree APM2 rounds`}
                    />
                </div>
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/plate-feature-1.png"
                        title="Proven Technology"
                        description={[
                            "Delivered Level IV ballistic plates to the Defense Acquisition Program Administration (2023)",
                            "Established partnerships with global companies",
                            "Ensured product reliability"
                        ]}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/plate-feature-2.png"
                        title="Multi-Curve Fit"
                        description={[
                            "Utilizes special ceramics and proprietary bonding technology optimized for mobility to achieve multi-curve shaping",
                            "Compatible and replaceable — can be inserted into Army Multipurpose Type I body armor",
                            "Reduces physical fatigue"
                        ]}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/plate-feature-3.png"
                        title="Advanced Materials"
                        description="Applies SAINT-GOBAIN ceramics (B4C) adopted by the U.S. military"
                    />
                </div>
            </div>
            <div className="w-full relative">
                <Image
                    src="/assets/products/plate-bottom.png"
                    alt="Plate"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="text-white font-aldrich text-[24px] md:text-[32px] text-center leading-relaxed drop-shadow-md">
                        Designed with an ultra-lightweight multi-curve structure,<br />
                        this plate provides superior protection, comfort, and mobility.
                    </p>
                </div>
            </div>
            <div className="w-full bg-black mt-[300px] mb-[300px] flex flex-col items-center justify-center text-center px-4">
                <p className="text-white font-pretendard text-[50px] mb-10 font-semibold">
                    Experience trusted ballistic protection
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