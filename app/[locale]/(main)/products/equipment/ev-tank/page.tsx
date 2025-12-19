import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import HorizontalScrollCards from "@/ui/HorizontalScrollCards";

export default function EVTankPage() {
    return (
        <div className="mt-[100px]">
            <Banner
                title="EV TANK"
                bgSrc="/assets/banners/ev-tank-banner.png"
                description="A flexible, drive-through tube system that immerses and suppresses EV batteries within 30 minutes using minimal crew and water."
                direction="right"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="ev-tank" menuNameKey="equipment" />
                <div className="mt-50 mb-20 font-aldrich text-[50px] mx-auto text-center">
                    Key Features
                </div>
            </div>
            <div className="w-full relative mb-80">
                <Image
                    src="/assets/products/ev-tank-top.png"
                    alt="EV Tank"
                    width={1920}
                    height={1080}
                    className="w-full h-auto" />

                <div className="absolute w-full h-full top-0 left-0">
                    <div className="grid grid-cols-3 gap-10 w-full max-w-[1500px] mx-auto">
                        <CircularProgress
                            percentage={70}
                            value={70}
                            prefix="%"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={`Installation Speed\nImprovement Rate`}
                        />
                        <CircularProgress
                            percentage={60}
                            value={60}
                            suffix="%"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={`Water Consumption\nReduction Rate`}
                        />
                        <CircularProgress
                            percentage={90}
                            value={90}
                            suffix="%"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={`Durability\nRetention Rate`}
                        />
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="font-aldrich text-[50px] mb-10 w-full text-center">
                    Immediate & Efficient Response<br />
                    Structure for EV Fire Incidents
                </div>
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/ev-tank-feature-1.png"
                        title="Proven Safety"
                        isBackground={false}
                        description="Over 17 stab-resistance tests completed at accredited domestic and international laboratories."
                    />
                    <FeatureCard
                        imageSrc="/assets/products/ev-tank-feature-2.png"
                        title="Weight Distribution System"
                        isBackground={false}
                        description={`A 3-point waist-tightening mechanism ensures a snug fit around the torso, enhancing comfort and evenly distributing weight to minimize fatigue during long wear.`}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/ev-tank-feature-3.png"
                        title="Quick Wearability"
                        isBackground={false}
                        description="Incorporates an aircraft life-vest fastening system with a zipper closure, allowing rapid wear and removal — even enabling over-the-head donning in emergencies for immediate readiness."
                    />
                </div>
            </div>
            <HorizontalScrollCards
                cards={[
                    {
                        imageSrc: "/assets/products/ev-tank-1.png",
                        title: "Bottomless mobile immersion system",
                        description: "Push-in response with minimal site limitations."
                    },
                    {
                        imageSrc: "/assets/products/ev-tank-2.png",
                        title: "Intuitive operator interface",
                        description: "Simple water controls and ports for quick use."
                    },
                    {
                        imageSrc: "/assets/products/ev-tank-3.png",
                        title: "Fast setup, low water use",
                        description: "Four-person deployment, immersion in 30 minutes with 7–8 tons."
                    },
                    {
                        imageSrc: "/assets/products/ev-tank-4.png",
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