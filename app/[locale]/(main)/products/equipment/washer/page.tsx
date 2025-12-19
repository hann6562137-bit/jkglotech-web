import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import HorizontalScrollCards from "@/ui/HorizontalScrollCards";

export default function WasherPage() {
    return (
        <div className="mt-[100px]">
            <Banner
                title="Washer"
                bgSrc="/assets/banners/washer-banner.png"
                description="A flexible, drive-through tube system that immerses and suppresses EV batteries within 30 minutes using minimal crew and water."
                direction="right"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="washer" menuNameKey="equipment" />
            </div>
            <div className="w-full relative mb-80">
                <Image
                    src="/assets/products/washer-top.png"
                    alt="Washer"
                    width={1920}
                    height={1080}
                    className="w-full h-auto" />

                <div className="absolute w-full h-full top-0 left-0">
                    <div className="mt-50 mb-20 font-aldrich text-[50px] mx-auto text-center">
                        Key Features
                    </div>
                    <div className="grid grid-cols-2 gap-10 w-full max-w-[900px] mx-auto">
                        <CircularProgress
                            percentage={10}
                            value={3}
                            suffix="min"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={`Installation Speed\nImprovement Rate`}
                            imageSrc="/assets/products/washer-circle-1.png"
                        />
                        <CircularProgress
                            percentage={15}
                            value={8}
                            suffix="min"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={`Water Consumption\nReduction Rate`}
                            imageSrc="/assets/products/washer-circle-2.png"
                        />
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="font-aldrich text-[50px] mb-10 w-full text-center">
                    Integrated Contamination-Control Washing System
                </div>
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/washer-feature-1.png"
                        title="Cross-Contamination Prevention Process"
                        isBackground={false}
                        description="Designed to handle contaminated equipment within a controlled environment, significantly reducing the risk of secondary exposure and cross-contamination."
                    />
                    <FeatureCard
                        imageSrc="/assets/products/washer-feature-2.png"
                        title="Multi-PPE Cleaning System"
                        isBackground={false}
                        description={`Supports SCBA, air cylinders, helmets, masks, boots, gloves, and more—maximizing operational efficiency by cleaning multiple PPE types with a single machine.`}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/washer-feature-3.png"
                        title="Disinfection Function Option"
                        isBackground={false}
                        description="Allows disinfectant application during the rinse stage or through a dedicated disinfection program, enabling enhanced hygiene beyond standard washing."
                    />
                </div>
            </div>
            <HorizontalScrollCards
                cards={[
                    {
                        imageSrc: "/assets/products/washer-1.png",
                        title: "Bottomless mobile immersion system",
                        description: "Push-in response with minimal site limitations."
                    },
                    {
                        imageSrc: "/assets/products/washer-2.png",
                        title: "Intuitive operator interface",
                        description: "Simple water controls and ports for quick use."
                    },
                    {
                        imageSrc: "/assets/products/washer-3.png",
                        title: "Fast setup, low water use",
                        description: "Four-person deployment, immersion in 30 minutes with 7–8 tons."
                    },
                    {
                        imageSrc: "/assets/products/washer-4.png",
                        title: "Korea-made & patented",
                        description: "Domestic manufacturing backed by multiple patents."
                    }
                ]}
            />
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