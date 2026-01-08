import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import HorizontalScrollCards from "@/ui/HorizontalScrollCards";
import { useTranslations } from "next-intl";
import EquipmentBanner from "@/ui/EquipmentBanner";

export default function WasherPage() {
  const t = useTranslations("products.washer");
  const tMenu = useTranslations("menu");

  return (
    <div className="mt-[50px] xl:mt-[100px]">
      <EquipmentBanner
        title={t("bannerTitle")}
        bgSrc="/assets/banners/washer-banner.png"
        mobileBgSrc="/assets/banners/washer-banner-mobile.png"
        description={t("bannerDescription")}
      />
      <div className="content-container mt-5 xl:mt-15 flex flex-col">
        <BodyArmorMenu currentMenu="washer" menuNameKey="equipment" />
      </div>
      <div className="w-full relative mb-10 xl:mb-80 mt-20 xl:mt-0">
        <Image
          src="/assets/products/washer-top.png"
          alt={t("topImageAlt")}
          width={1920}
          height={1080}
          className="w-full h-auto" />

        <div className="absolute w-full h-full top-0 left-0">
          <div className="xl:mt-50 xl:mb-20 font-aldrich text-[20px] xl:text-[50px] mx-auto text-center">
            {t("keyFeaturesTitle")}
          </div>
          <div className="grid grid-cols-2 gap-10 w-full max-w-[900px] mx-auto">
            <CircularProgress
              percentage={10}
              value={3}
              suffix="min"
              background="rgba(0,0,0,0)"
              bgRingColor="#121319"
              strokeThickness={6}
              bigTitle={t("stats.installationSpeed")}
              isEquipment
              imageSrc="/assets/products/washer-circle-1.png"
            />
            <CircularProgress
              percentage={15}
              value={8}
              suffix="min"
              background="rgba(0,0,0,0)"
              bgRingColor="#121319"
              strokeThickness={6}
              bigTitle={t("stats.waterReduction")}
              isEquipment
              imageSrc="/assets/products/washer-circle-2.png"
            />
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="font-aldrich text-[20px] xl:text-[50px] mb-10 w-full text-center">
          {t("systemTitle")}
        </div>
        <div className="flex flex-col gap-[2px] mt-10 xl:mt-20 w-full mb-20 xl:mb-40">
          <FeatureCard
            imageSrc="/assets/products/washer-feature-1.png"
            title={t("features.feature1.title")}
            isBackground={false}
            description={t("features.feature1.description")}
          />
          <FeatureCard
            imageSrc="/assets/products/washer-feature-2.png"
            title={t("features.feature2.title")}
            isBackground={false}
            description={t("features.feature2.description")}
            isRight
          />
          <FeatureCard
            imageSrc="/assets/products/washer-feature-3.png"
            title={t("features.feature3.title")}
            isBackground={false}
            description={t("features.feature3.description")}
          />
        </div>
      </div>
      <HorizontalScrollCards
        cards={[
          {
            imageSrc: "/assets/products/washer-1.png",
            title: t("scrollCards.card1.title"),
            description: t("scrollCards.card1.description")
          },
          {
            imageSrc: "/assets/products/washer-2.png",
            title: t("scrollCards.card2.title"),
            description: t("scrollCards.card2.description")
          },
          {
            imageSrc: "/assets/products/washer-3.png",
            title: t("scrollCards.card3.title"),
            description: t("scrollCards.card3.description")
          },
          {
            imageSrc: "/assets/products/washer-4.png",
            title: t("scrollCards.card4.title"),
            description: t("scrollCards.card4.description")
          }
        ]}
      />
      <div className="w-full bg-black my-[100px] xl:my-[300px] flex flex-col items-center justify-center text-center px-4">
        <p className="text-white font-pretendard text-[20px] xl:text-[50px] mb-10 font-semibold">
          {t("cta.heading")}
        </p>
        <Link
          href="/about-us"
          className="bg-[#FFD900] w-full xl:w-auto justify-center text-black font-pretendard xl:px-20 py-2 xl:py-4 text-[17px] xl:text-[35px] font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
        >
          {tMenu("about-us")} <span className="ml-2 text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}