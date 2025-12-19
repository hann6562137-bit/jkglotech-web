import PentagonChart from "@/components/animation/PentagonChart";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import FeatureCard from "@/ui/FeatureCard";
import FeatureGrid from "@/ui/FeatureGrid";
import Image from "next/image";

export default function HoodPage() {
    return (
        <div>
            <Banner
                title="Hood"
                description={"With ANSI/ISEA 105 Cut Level A5 performance and outstanding comfort,\nyou can experience top-level safety and ease on the job."}
                bgSrc="/assets/banners/hood-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="hood" menuNameKey="thermal" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/hood-top.png"
                        alt="hood"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    Ergonomic Thermal & Safety Protection
                </div>

            </div>
            <div className="w-full mt-20 flex flex-col items-center justify-center">
                <div className="w-full mt-20 flex justify-center mb-40">
                    <div className="w-full max-w-[1000px] aspect-square">
                        <PentagonChart
                            centerImageSrc="/assets/products/hood-chart.png"
                            centerImageWidthPercent={60}
                            labels={[
                                "Flash Fire Protection",
                                "Ergonomic Fit",
                                "Enhanced Safety",
                                "Soft Comfort",
                                "Arc Flash\nProtection"
                            ]}
                            values={[
                                92,
                                92,
                                94,
                                90,
                                92
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="content-container flex flex-col mb-10">
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-50">
                    <FeatureCard
                        imageSrc="/assets/products/glove-feature-1.png"
                        title="Enhanced Thermal Blocking with\nPatented Dual-Layer Structure"
                        description="An internal air layer creates a triple thermal barrier, maximizing protection against flames and high heat."
                        isBackground={false}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/glove-feature-2.png"
                        title="Soft, Enhanced Comfort"
                        description={`Specially engineered fabrics maintain softness and flexibility even after repeated washing, ensuring long-lasting comfort.`}
                        isBackground={false}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/glove-feature-3.png"
                        title="Optimized Nomex® Blend to Minimize\nBurn Risk"
                        description="Made with DuPont™ Nomex®, minimizing burn risk caused by trapped heat and perspiration."
                        isBackground={false}
                    />
                </div>
            </div>
            <div className="w-full relative">
                <Image
                    src="/assets/products/hood-bottom.png"
                    alt="hood"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="text-white font-aldrich text-[24px] md:text-[32px] text-center leading-relaxed drop-shadow-md">
                        The optimal protective choice for safeguarding
                        <br />your head in extreme environments.
                    </p>
                </div>
            </div>
            <div className="w-full bg-black py-20 mt-40">
                <div className="w-full text-center font-aldrich text-[40px] mt-20 mb-24">
                    Ergonomic 3D pattern design with an ear-area air pocket.
                </div>
                <div className="content-container">
                    <FeatureGrid
                        items={[
                            {
                                number: "01.",
                                title: "Permanent Flame \nResistance",
                                description: "Maintains durable flame-resistant performance after repeated use and washing."
                            },
                            {
                                number: "02.",
                                title: "Thermo-man® Tested",
                                description: "Proven protection validated through DuPont™ Thermo-man® fire mannequin testing."
                            },
                            {
                                number: "03.",
                                title: "Lightweight & Highly\nFlexible",
                                description: "Designed for long-wear comfort with excellent mobility."
                            },
                            {
                                number: "04.",
                                title: "Flash Fire & Arc Flash \nDual Protection",
                                description: "Shields workers from both flash fire and arc-flash energy."
                            },
                            {
                                number: "05.",
                                title: "Arc Flash Rating: 9.4 cal/cm² \nAPTV",
                                description: "Provides certified arc-flash protection for safer work conditions."
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="w-full bg-black mt-[300px] mb-[300px] flex flex-col items-center justify-center text-center px-4">
                <p className="text-white font-pretendard text-[50px] mb-10 font-semibold">
                    Curious about the performance? Contact us
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