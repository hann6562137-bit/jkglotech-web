import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/Banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import BodyArmorBottomHero from "@/ui/BodyArmorBottomHero";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PlateVestPage() {
  const t = useTranslations("products.plate");
  const tMenu = useTranslations("menu");

  return (
    <div className="mt-[50px] xl:mt-0">
      <Banner
        title={t("bannerTitle")}
        bgSrc="/assets/banners/plate-banner.png"
      />
      <div className="content-container mt-5 xl:mt-15 flex flex-col">
        <BodyArmorMenu currentMenu="plate" />
        <div className="w-full h-auto mt-5 xl:mt-10">
          <Image
            src="/assets/products/plate-top.png"
            alt={t("topImageAlt")}
            width={1920}
            height={1080}
          />
        </div>
        <div className="mt-10 xl:mt-50 mb-10 xl:mb-50 font-aldrich text-[20px] md:text-[50px] mx-auto text-center whitespace-pre-line">
          {t("titleMain")}
        </div>
      </div>
      <div className="w-full bg-[#121319]">
        <div className="w-full max-w-[1920px] mx-auto">
          <ProductMainIntoduce
            src="/assets/products/plate-intro.png"
            mobileSrc="/assets/products/plate-intro-mobile.png"
            mobileText="/assets/products/plate-intro-text.svg" />
        </div>
      </div>
      <div className="content-container flex flex-col">
        <div className="mt-10 xl:mt-50 mb-10 xl:mb-30 font-aldrich text-[20px] md:text-[40px] mx-auto text-center">
          {t("materialDurabilityTitle")}
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-6 w-full mb-20 xl:mb-40 md:px-50">
          <CircularProgress
            percentage={15}
            value={15}
            suffix="%"
            title={t("stats.lightweightDesign.title")}
            description={t("stats.lightweightDesign.description")}
          />
          <CircularProgress
            percentage={20}
            value={20}
            suffix="%"
            title={t("stats.wearability.title")}
            description={t("stats.wearability.description")}
          />
          <CircularProgress
            percentage={100}
            value={100}
            suffix="%"
            title={t("stats.protectionLevel.title")}
            description={t("stats.protectionLevel.description")}
          />
        </div>
        <div className="flex flex-col gap-[2px] mt-10 xl:mt-50 w-full mb-10 xl:mb-40">
          <FeatureCard
            imageSrc="/assets/products/plate-feature-1.png"
            title={t("features.feature1.title")}
            description={t("features.feature1.description")}
          />
          <FeatureCard
            imageSrc="/assets/products/plate-feature-2.png"
            title={t("features.feature2.title")}
            description={t("features.feature2.description")}
          />
          <FeatureCard
            imageSrc="/assets/products/plate-feature-3.png"
            title={t("features.feature3.title")}
            description={t("features.feature3.description")}
          />
        </div>
      </div>
      <BodyArmorBottomHero
        imageSrc="/assets/products/plate-bottom.png"
        mobileImageSrc="/assets/products/plate-bottom-mobile.png"
        alt={t("bottomHero.alt")}
      >
        <>
          {t("bottomHero.text").split("\n").map((line, idx) => (
            <span key={idx} className="hidden xl:inline">
              {line}
              {idx === 0 && <br />}
            </span>
          ))}
        </>
        <span className="inline xl:hidden">
          {t("bottomHero.text")}
        </span>
      </BodyArmorBottomHero>
      <div className="w-full bg-black mt-[100px] xl:mt-[300px] mb-[100px] xl:mb-[300px] flex flex-col items-center justify-center text-center px-4">
        <p className="text-white font-pretendard text-[20px] md:text-[50px] mb-10 font-semibold">
          {t("cta.heading")}
        </p>
        <Link
          href="/about-us"
          className="w-full justify-center xl:w-auto bg-[#FFD900] text-black font-pretendard px-0 xl:px-20 py-2 xl:py-4 text-[17px] md:text-[35px] font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
        >
          {tMenu("about-us2")} <span className="ml-2 text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}