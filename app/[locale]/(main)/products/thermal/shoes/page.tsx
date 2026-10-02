import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import Banner from "@/ui/Banner";
import FeatureCard from "@/ui/FeatureCard";
import FeatureGrid from "@/ui/FeatureGrid";
import ThermalMiddleHero from "@/ui/ThermalMiddleHero";
import ThermalBottomHero from "@/ui/ThermalBottomHero";
import PentagonChart from "@/components/animation/PentagonChart";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function ShoesPage() {
  const t = await getTranslations("products.shoes");
  const locale = await getLocale();
  const middleHeroLines = t("middleHero.text").split("\n");

  return (
    <div>
      <Banner
        title={t("bannerTitle")}
        description={t("bannerDescription")}
        bgSrc="/assets/banners/shoes-banner.png"
        mobileBgSrc="/assets/banners/shoes-banner-mobile.png"
        aspect="xl:aspect-auto aspect-[3/2]"
      />
      <div className="content-container mt-5 xl:mt-15 flex flex-col">
        <BodyArmorMenu currentMenu="shoes" menuNameKey="thermal" />
        <div className="w-full h-auto mt-10">
          <Image
            src="/assets/products/shoes-top.png"
            alt={t("topImageAlt")}
            width={1920}
            height={1080}
          />
 <div className="w-full flex justify-center mt-10 xl:mt-20">
  <Image
    src="/assets/products/CE.png"
    alt="CE Certification"
    width={1920}
    height={1080}
    className="w-1/3 h-auto object-contain"
  />
</div>
        </div>
<div className="mt-5 xl:mt-15 mb-10 xl:mb-50 font-aldrich text-[20px] md:text-[50px] mx-auto text-center">
  {t("chartTitle")}
</div>
      </div>

      <div className="w-full mt-10 xl:mt-20 flex flex-col items-center justify-center">
        <div className="w-full mt-10 xl:mt-20 flex justify-center mb-20 xl:mb-40">
          <div className="mx-auto w-[80%] xl:w-full max-w-[1000px] aspect-square">
            <PentagonChart
              centerImageSrc="/assets/products/shoes-chart.png"
              centerImageWidthPercent={50}
              labels={[
                t("chart.labels.cutResistance"),
                t("chart.labels.punctureResistance"),
                t("chart.labels.antiSlip"),
                t("chart.labels.waterResistance"),
                t("chart.labels.comfortFit"),
              ]}
              values={[90, 90, 92, 88, 90]}
            />
          </div>
        </div>
      </div>

      {/* 스펙표 (일반형 S3L 기준, JK-4200 / JK-6200) */}
<div className="content-container mb-16 xl:mb-32">
        {locale === "ko" ? (
          <object
            data="/assets/products/shoes-detail-ko.svg"
            type="image/svg+xml"
            className="w-full h-auto"
          />
        ) : (
          <object
            data="/assets/products/shoes-detail.svg"
            type="image/svg+xml"
            className="w-full h-auto"
          />
        )}
      </div>

      {/* WR(방수) 버전 안내 */}
<div className="w-full mb-10 xl:mb-50 flex flex-col items-center text-center">
  <div className="w-[1000px] max-w-none mb-6">
    <Image
      src="/assets/products/shoes-waterproof.png"
      alt="Water Resistant"
      width={3600}
      height={2400}
      className="w-full h-auto"
    />
  </div>

<p
  className="text-gray-400 font-pretendard"
  style={{ fontSize: "28px", lineHeight: "1.6" }}
>
  {t("wrNote")}
</p>
</div>

<div className="mt-10 xl:mt-20 mb-20 xl:mb-60 w-full">

  <p className="text-center text-white text-[18px] md:text-[24px] font-pretendard mb-10">
    {t("ceCertification")}
  </p>

  <div className="flex flex-col xl:flex-row gap-6 items-center justify-center">
    <Image
      src="/assets/products/shoes-cert-s3l.png"
      alt="EU Declaration of Conformity - S3L"
      width={1654}
      height={2339}
      className="w-[500px] max-w-none h-auto border border-gray-700"
    />

    <Image
      src="/assets/products/shoes-cert-s7l.png"
      alt="EU Declaration of Conformity - S7L"
      width={1654}
      height={2339}
      className="w-[500px] max-w-none h-auto border border-gray-700"
    />
  </div>

</div>



      <div className="content-container flex flex-col">
        <div className="flex flex-col gap-[2px] mt-20 w-full mb-10 xl:mb-40">
          <FeatureCard
            imageSrc="/assets/products/shoes-feature-1.png"
            title={t("features.feature1.title")}
            description={t("features.feature1.description")}
            isBackground={false}
          />
          <FeatureCard
            imageSrc="/assets/products/shoes-feature-2.png"
            title={t("features.feature2.title")}
            description={t("features.feature2.description")}
            isBackground={false}
            isRight
          />
          <FeatureCard
            imageSrc="/assets/products/shoes-feature-3.png"
            title={t("features.feature3.title")}
            description={t("features.feature3.description")}
            isBackground={false}
          />
        </div>
      </div>

      <ThermalMiddleHero
        imageSrc="/assets/products/shoes-bottom.png"
        alt={t("topImageAlt")}
      >
        <>
          {middleHeroLines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx !== middleHeroLines.length - 1 && (
                <br className="hidden xl:block" />
              )}
            </span>
          ))}
        </>
      </ThermalMiddleHero>

      <div className="w-full bg-black py-5 xl:py-20 mt-10 xl:mt-40">
        <div className="w-full text-center font-aldrich text-[20px] md:text-[40px] mt-10 xl:mt-20 mb-12 xl:mb-24 xl:px-0 px-5">
          {t("allInOneTitle")}
        </div>
        <div className="content-container">
          <FeatureGrid
            items={[
              {
                number: "01.",
                title: t("grid.items.item1.title"),
                description: t("grid.items.item1.description"),
              },
              {
                number: "02.",
                title: t("grid.items.item2.title"),
                description: t("grid.items.item2.description"),
              },
              {
                number: "03.",
                title: t("grid.items.item3.title"),
                description: t("grid.items.item3.description"),
              },
              {
                number: "04.",
                title: t("grid.items.item4.title"),
                description: t("grid.items.item4.description"),
              },
              {
                number: "05.",
                title: t("grid.items.item5.title"),
                description: t("grid.items.item5.description"),
              },
            ]}
          />
        </div>
      </div>

      <ThermalBottomHero />
    </div>
  );
}