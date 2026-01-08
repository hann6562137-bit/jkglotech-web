import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/Banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import HorizontalScrollCards from "@/ui/HorizontalScrollCards";
import { useTranslations } from "next-intl";

export default function EVTankPage() {
    const t = useTranslations("products.evTank");
    const tMenu = useTranslations("menu");

    return (
        <div className="mt-[100px]">
            <Banner
                title={t("bannerTitle")}
                bgSrc="/assets/banners/ev-tank-banner.png"
                description={t("bannerDescription")}
                direction="right"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="ev-tank" menuNameKey="equipment" />
                <div className="mt-50 mb-20 font-aldrich text-[50px] mx-auto text-center">
                    {t("keyFeaturesTitle")}
                </div>
            </div>
            <div className="w-full relative mb-80">
                <Image
                    src="/assets/products/ev-tank-top.png"
                    alt={t("topImageAlt")}
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
                            bigTitle={t("stats.installationSpeed")}
                        />
                        <CircularProgress
                            percentage={60}
                            value={60}
                            suffix="%"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={t("stats.waterReduction")}
                        />
                        <CircularProgress
                            percentage={90}
                            value={90}
                            suffix="%"
                            background="rgba(0,0,0,0)"
                            bgRingColor="#121319"
                            strokeThickness={6}
                            bigTitle={t("stats.durabilityRetention")}
                        />
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="font-aldrich text-[50px] mb-10 w-full text-center">
                    {t("responseTitle").split("\n").map((line, idx) => (
                        <span key={idx}>
                            {line}
                            {idx === 0 && <br />}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/ev-tank-feature-1.png"
                        title={t("features.feature1.title")}
                        isBackground={false}
                        description={t("features.feature1.description")}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/ev-tank-feature-2.png"
                        title={t("features.feature2.title")}
                        isBackground={false}
                        description={t("features.feature2.description")}
                        isRight
                    />
                    <FeatureCard
                        imageSrc="/assets/products/ev-tank-feature-3.png"
                        title={t("features.feature3.title")}
                        isBackground={false}
                        description={t("features.feature3.description")}
                    />
                </div>
            </div>
            <div className="w-full text-center mb-10 font-aldrich text-[40px]">
                {t("scrollCards.introText")}
            </div>
            <HorizontalScrollCards
                cards={[
                    {
                        imageSrc: "/assets/products/ev-tank-1.png",
                        title: t("scrollCards.card1.title"),
                        description: t("scrollCards.card1.description")
                    },
                    {
                        imageSrc: "/assets/products/ev-tank-2.png",
                        title: t("scrollCards.card2.title"),
                        description: t("scrollCards.card2.description")
                    },
                    {
                        imageSrc: "/assets/products/ev-tank-3.png",
                        title: t("scrollCards.card3.title"),
                        description: t("scrollCards.card3.description")
                    },
                    {
                        imageSrc: "/assets/products/ev-tank-4.png",
                        title: t("scrollCards.card4.title"),
                        description: t("scrollCards.card4.description")
                    }
                ]}
            />
            <div className="w-full bg-black mt-[300px] mb-[300px] flex flex-col items-center justify-center text-center px-4">
                <p className="text-white font-pretendard text-[50px] mb-10 font-semibold">
                    {t("cta.heading")}
                </p>
                <Link
                    href="/about-us"
                    className="bg-[#FFD900] text-black font-pretendard px-20 py-4 text-[35px] font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
                >
                    {tMenu("about-us")} <span className="ml-2 text-xl">→</span>
                </Link>
            </div>
        </div>
    );
}