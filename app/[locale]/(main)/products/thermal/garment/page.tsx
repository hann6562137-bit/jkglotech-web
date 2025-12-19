import PentagonChart from "@/components/animation/PentagonChart";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import FeatureGrid from "@/ui/FeatureGrid";

export default function GarmentPage() {
    return (
        <div>
            <Banner
                title="Garment"
                description={"The ENIGMA flame-resistant garment made with DuPont™ Nomex® fabric is a high-performance industrial\nprotective wear designed to safeguard workers from flash fires and arc flash hazards."}
                bgSrc="/assets/banners/garment-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="garment" menuNameKey="thermal" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/garment-top.png"
                        alt="Garment"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    Nomex®-Based Protection Performance Radar Chart
                </div>

            </div>
            <div className="w-full mt-20 flex flex-col items-center justify-center">
                <div className="w-full mt-20 flex justify-center mb-40">
                    <div className="w-full max-w-[1000px] aspect-square">
                        <PentagonChart
                            centerImageSrc="/assets/products/garment-chart.png"
                            centerImageWidthPercent={73}
                            labels={[
                                "Flame Resistance",
                                "Arc Flash\nProtection",
                                "Reliability",
                                "Durability",
                                "Comfort\n& Mobility"
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
            <div className="content-container flex flex-col">
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/garment-feature-1.png"
                        title="High Level of Flame Protection Based on International Standards"
                        description="It meets global flame-resistant standards such as ISO 11612 and NFPA 2112, maintaining reliable protection even in flash fire and high-temperature environments."
                        isBackground={false}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/garment-feature-2.png"
                        title="Lightweight Comfort Unique to Nomex®"
                        description={`The soft texture and lightweight structure of Nomex® Comfort and Essential Arc fabrics reduce fatigue during long working hours..`}
                        isBackground={false}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/garment-feature-3.png"
                        title="Arc Flash Protection"
                        description="Engineered with Nomex® Essential Arc fabric for arc flash protection, it provides HRC 2 (8 cal/cm²) or higher performance, with the jacket and pants each carrying their own certified Arc Rating."
                        isBackground={false}
                    />
                </div>
            </div>
            <div className="w-full relative">
                <Image
                    src="/assets/products/garment-bottom.png"
                    alt="Garment"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="text-white font-aldrich text-[24px] md:text-[32px] text-center leading-relaxed drop-shadow-md">
                        It provides reliable protection in various high-risk work
                        <br />
                        environments through lightweight comfort, high durability,
                        <br />
                        and internationally certified safety performance
                    </p>
                </div>
            </div>


            <div className="w-full bg-black py-20 mt-40">
                <div className="w-full text-center font-aldrich text-[40px] mt-20 mb-24">
                    Ergonomic 3D pattern design with an ear-zone air pocket
                </div>
                <div className="content-container">
                    <FeatureGrid
                        items={[
                            {
                                number: "01.",
                                title: "Permanent Flame Resistance",
                                description: "Because Nomex® is inherently flame-resistant at the fiber level rather than through surface coating, its protection does not diminish with washing or abrasion."
                            },
                            {
                                number: "02.",
                                title: "Enhanced Breathability and Workability",
                                description: "Nomex® is lighter and offers superior breathability and moisture management compared to other FR materials, maintaining comfort even during high-heat tasks."
                            },
                            {
                                number: "03.",
                                title: "Versatile Industrial Garment Configurations",
                                description: "It can be manufactured in various forms—coveralls, shirts, pants—to build a customized PPE system tailored to different work environments."
                            },
                            {
                                number: "04.",
                                title: "Exceptional Heat & Flame Resistance",
                                description: "The air-pocket structure formed around the ear area blocks direct heat transfer in fire or high-temperature environments, reducing the risk of burn injuries."
                            },
                            {
                                number: "05.",
                                title: "Durable for Long-Term Industrial Use",
                                description: "It maintains fabric strength and durability even after repeated use in high-risk industrial settings such as petrochemical plants, utilities, and oil & gas operations."
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
        </div >
    );
}