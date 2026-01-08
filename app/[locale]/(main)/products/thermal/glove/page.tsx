import PentagonChart from "@/components/animation/PentagonChart";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import Banner from "@/ui/Banner";
import FeatureCard from "@/ui/FeatureCard";
import FeatureGrid from "@/ui/FeatureGrid";
import ThermalMiddleHero from "@/ui/ThermalMiddleHero";
import ThermalBottomHero from "@/ui/ThermalBottomHero";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function GlovePage() {
  const t = useTranslations("products.glove");
  const middleHeroLines = t("middleHero.text").split("\n");

  return (
    <div>
      <Banner
        title={t("bannerTitle")}
        description={t("bannerDescription")}
        bgSrc="/assets/banners/glove-banner.png"
        mobileBgSrc="/assets/banners/glove-banner-mobile.png"
        aspect="xl:aspect-auto aspect-[3/2]"
      />
      <div className="content-container mt-5 xl:mt-15 flex flex-col">
        <BodyArmorMenu currentMenu="glove" menuNameKey="thermal" />
        <div className="w-full h-auto mt-10">
          <Image
            src="/assets/products/glove-top.png"
            alt={t("topImageAlt")}
            width={1920}
            height={1080}
          />
        </div>
        <div className="mt-10 xl:mt-50 mb-10 xl:mb-50 font-aldrich text-[20px] xl:text-[50px] mx-auto text-center">
          {t("chartTitle")}
        </div>

      </div>
      <div className="w-full mt-10 xl:mt-20 flex flex-col items-center justify-center">
        <div className="w-full mt-10 xl:mt-20 flex justify-center mb-20 xl:mb-40">
          <div className="mx-auto w-[80%] xl:w-full max-w-[1000px] aspect-square">
            <PentagonChart
              centerImageSrc="/assets/products/glove-chart.png"
              centerImageWidthPercent={50}
              labels={[
                t("chart.labels.cutResistance"),
                t("chart.labels.heatArcProtection"),
                t("chart.labels.comfortFlexibility"),
                t("chart.labels.durability"),
                t("chart.labels.fieldProven")
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
      <div className="content-container mb-10 xl:mb-50">
        <object
          data="/assets/products/glove-detail.svg"
          type="image/svg+xml"
          className="w-full h-auto"
        />
      </div>
      <div className="content-container flex flex-col">
        <div className="flex flex-col gap-[2px] mt-20 w-full mb-10 xl:mb-40">
          <FeatureCard
            imageSrc="/assets/products/glove-feature-1.png"
            title={t("features.feature1.title")}
            description={t("features.feature1.description")}
            isBackground={false}
          />
          <FeatureCard
            imageSrc="/assets/products/glove-feature-2.png"
            title={t("features.feature2.title")}
            description={t("features.feature2.description")}
            isBackground={false}
            isRight
          />
          <FeatureCard
            imageSrc="/assets/products/glove-feature-3.png"
            title={t("features.feature3.title")}
            description={t("features.feature3.description")}
            isBackground={false}
          />
        </div>
      </div>
      <ThermalMiddleHero
        imageSrc="/assets/products/glove-bottom.png"
        alt={t("topImageAlt")}
      >
        <>
          {middleHeroLines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx !== middleHeroLines.length - 1 && <br className="hidden xl:block" />}
            </span>
          ))}
        </>
      </ThermalMiddleHero>
      <div className="w-full bg-black py-5 xl:py-20 mt-10 xl:mt-40">
        <div className="w-full text-center font-aldrich text-[20px] xl:text-[40px] mt-10 xl:mt-20 mb-12 xl:mb-24 xl:px-0 px-5">
          {t("allInOneTitle")}
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
    </div>
  );
}