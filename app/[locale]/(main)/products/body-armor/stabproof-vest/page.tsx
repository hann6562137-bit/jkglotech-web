import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import BodyArmorBottomHero from "@/ui/BodyArmorBottomHero";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function StabproofVestPage() {
    const t = useTranslations("products.stabproofVest");
    const tMenu = useTranslations("menu");

    return (
        <div className="">
            <Banner
                title={t("bannerTitle")}
                bgSrc="/assets/banners/stabproof-vest-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="stabproof-vest" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/stabproof-vest-top.png"
                        alt={t("topImageAlt")}
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    {t("titleMain")}
                </div>

            </div>
            <div className="w-full bg-[#121319] mt-20">
                <div className="w-full max-w-[1920px] mx-auto ">
                    <ProductMainIntoduce src="/assets/products/stabproof-vest-intro.png" />
                </div>
            </div>
            <div className="content-container flex flex-col">
                <div className="mt-50 mb-30 font-aldrich text-[40px] mx-auto text-center">
                    {t("materialDurabilityTitle")}
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-40  md:px-50">
                    <CircularProgress
                        percentage={85}
                        value={15}
                        prefix="x"
                        title={t("stats.stabResistanceTest.title")}
                        description={t("stats.stabResistanceTest.description")}
                    />
                    <CircularProgress
                        percentage={100}
                        value={100}
                        suffix="%"
                        title={t("stats.kevlarPrepreg.title")}
                        description={t("stats.kevlarPrepreg.description")}
                    />
                    <CircularProgress
                        percentage={100}
                        value={100}
                        suffix="%"
                        title={t("stats.kevlarCeramic.title")}
                        description={t("stats.kevlarCeramic.description")}
                    />
                </div>
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/stabproof-vest-feature-2.png"
                        title={t("features.feature1.title")}
                        description={t("features.feature1.description")}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/stabproof-vest-feature-3.png"
                        title={t("features.feature2.title")}
                        description={t("features.feature2.description")}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/stabproof-vest-feature-4.png"
                        title={t("features.feature3.title")}
                        description={t("features.feature3.description")}
                    />
                </div>
            </div>
            <BodyArmorBottomHero
                imageSrc="/assets/products/stabproof-vest-bottom.png"
                alt={t("bottomHero.alt")}
            >
                <>
                    {t("bottomHero.text").split("\n").map((line, idx) => (
                        <span key={idx}>
                            {line}
                            {idx === 0 && <br />}
                        </span>
                    ))}
                </>
            </BodyArmorBottomHero>
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