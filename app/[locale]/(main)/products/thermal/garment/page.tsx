import PentagonChart from "@/components/animation/PentagonChart";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import Banner from "@/ui/Banner";
import FeatureCard from "@/ui/FeatureCard";
import FeatureGrid from "@/ui/FeatureGrid";
import BodyArmorBottomHero from "@/ui/BodyArmorBottomHero";
import ThermalMiddleHero from "@/ui/ThermalMiddleHero";
import ThermalBottomHero from "@/ui/ThermalBottomHero";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function GarmentPage() {
    const t = useTranslations("products.garment");
    const middleHeroLines = t("middleHero.text").split("\n");

    return (
        <div>
            <Banner
                title={t("bannerTitle")}
                description={t("bannerDescription")}
                bgSrc="/assets/banners/garment-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="garment" menuNameKey="thermal" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/garment-top.png"
                        alt={t("topImageAlt")}
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    {t("chartTitle")}
                </div>

            </div>
            <div className="w-full mt-20 flex flex-col items-center justify-center">
                <div className="w-full mt-20 flex justify-center mb-40">
                    <div className="w-full max-w-[1000px] aspect-square">
                        <PentagonChart
                            centerImageSrc="/assets/products/garment-chart.png"
                            centerImageWidthPercent={73}
                            labels={[
                                t("chart.labels.flameResistance"),
                                t("chart.labels.arcFlashProtection"),
                                t("chart.labels.reliability"),
                                t("chart.labels.durability"),
                                t("chart.labels.comfortMobility")
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
                        title={t("features.feature1.title")}
                        description={t("features.feature1.description")}
                        isBackground={false}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/garment-feature-2.png"
                        title={t("features.feature2.title")}
                        description={t("features.feature2.description")}
                        isBackground={false}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/garment-feature-3.png"
                        title={t("features.feature3.title")}
                        description={t("features.feature3.description")}
                        isBackground={false}
                    />
                </div>
            </div>
            <ThermalMiddleHero
                imageSrc="/assets/products/garment-bottom.png"
                alt={t("topImageAlt")}
            >
                <>
                    {middleHeroLines.map((line, idx) => (
                        <span key={idx}>
                            {line}
                            {idx !== middleHeroLines.length - 1 && <br />}
                        </span>
                    ))}
                </>
            </ThermalMiddleHero>


            <div className="w-full bg-black py-20 mt-40">
                <div className="w-full text-center font-aldrich text-[40px] mt-20 mb-24">
                    {t("ergonomicTitle")}
                </div>
                <div className="content-container">
                    <FeatureGrid
                        items={[
                            {
                                number: "01.",
                                title: t("grid.items.item1.title"),
                                description: t("grid.items.item1.description")
                            },
                            {
                                number: "02.",
                                title: t("grid.items.item2.title"),
                                description: t("grid.items.item2.description")
                            },
                            {
                                number: "03.",
                                title: t("grid.items.item3.title"),
                                description: t("grid.items.item3.description")
                            },
                            {
                                number: "04.",
                                title: t("grid.items.item4.title"),
                                description: t("grid.items.item4.description")
                            },
                            {
                                number: "05.",
                                title: t("grid.items.item5.title"),
                                description: t("grid.items.item5.description")
                            }
                        ]}
                    />
                </div>
            </div>

            <ThermalBottomHero />
        </div >
    );
}