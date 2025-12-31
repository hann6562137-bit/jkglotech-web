import PentagonChart from "@/components/animation/PentagonChart";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import Banner from "@/ui/banner";
import FeatureCard from "@/ui/FeatureCard";
import FeatureGrid from "@/ui/FeatureGrid";
import ThermalMiddleHero from "@/ui/ThermalMiddleHero";
import ThermalBottomHero from "@/ui/ThermalBottomHero";
import Image from "next/image";

export default function GlovePage() {
    return (
        <div>
            <Banner
                title="Glove"
                description={"With ANSI/ISEA 105 Cut Level A5 performance and outstanding comfort,\nyou can experience top-level safety and ease on the job."}
                bgSrc="/assets/banners/glove-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="glove" menuNameKey="thermal" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/glove-top.png"
                        alt="glove"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    DEXCut-Pro Overall Protection Performance Index
                </div>

            </div>
            <div className="w-full mt-20 flex flex-col items-center justify-center">
                <div className="w-full mt-20 flex justify-center mb-40">
                    <div className="w-full max-w-[1000px] aspect-square">
                        <PentagonChart
                            centerImageSrc="/assets/products/glove-chart.png"
                            centerImageWidthPercent={50}
                            labels={[
                                "Cut Resistance",
                                "Heat \n& Arc Protection",
                                "Comfort & Flexibility",
                                "Durability",
                                "Field-Proven\nPerformance"
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
            <div className="content-container mb-50">
                <object
                    data="/assets/products/glove-detail.svg"
                    type="image/svg+xml"
                    className="w-full h-auto"
                />
            </div>
            <div className="content-container flex flex-col mb-10">
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-50">
                    <FeatureCard
                        imageSrc="/assets/products/glove-feature-1.png"
                        title="High Thermal Stability"
                        description="The heat-resistant fiber structure of Kevlar® Engineered Yarn minimizes performance degradation under high temperatures, providing stable protection during heat-intensive tasks, sparks, and friction heat."
                        isBackground={false}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/glove-feature-2.png"
                        title="Ultra-Lightweight Design for Reduced Fatigue"
                        description={`Its lightweight yarn construction reduces bulk and hand strain, significantly lowering wrist and finger fatigue during repetitive or precision tasks.`}
                        isBackground={false}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/glove-feature-3.png"
                        title="Field-Optimized Engineering"
                        description="Through repeated field testing across metalwork, automotive, utilities, and electrical industries, the glove delivers a balanced combination of protection, flexibility, and durability optimized for real-world work environments."
                        isBackground={false}
                    />
                </div>
            </div>
            <ThermalMiddleHero
                imageSrc="/assets/products/glove-bottom.png"
                alt="glove"
            >
                <>
                    DEXCut-Pro, made with DuPont™ Kevlar® Engineered Yarn,<br />
                    provides comprehensive protection against cuts, flames,<br />
                    and arc flash in a single glove.
                </>
            </ThermalMiddleHero>
            <div className="w-full bg-black py-20 mt-40">
                <div className="w-full text-center font-aldrich text-[40px] mt-20 mb-24">
                    All-in-One High-Performance Kevlar® Protective Glove
                </div>
                <div className="content-container">
                    <FeatureGrid
                        items={[
                            {
                                number: "01.",
                                title: "A5 High Cut Resistance",
                                description: "Delivers top-tier cut protection meeting ANSI/ISEA 105 Level A5."
                            },
                            {
                                number: "02.",
                                title: "Superior Comfort & Grip",
                                description: "A core metal-fiber structure enhances stability, ensuring exceptional comfort and grip."
                            },
                            {
                                number: "03.",
                                title: "Multi-Hazard Protection",
                                description: "Engineered to protect against multiple hazards rarely covered by standard cut-resistant gloves."
                            },
                            {
                                number: "04.",
                                title: "Advanced Kevlar®\nEngineered Yarn",
                                description: "Lightweight and flexible yarn reduces fatigue and supports precision tasks."
                            },
                            {
                                number: "05.",
                                title: "Versatility Across Industries",
                                description: "Meets global standards and is suitable for steel, automotive, utilities, and various industrial environments."
                            }
                        ]}
                    />
                </div>
            </div>
            <ThermalBottomHero />
        </div>
    );
}