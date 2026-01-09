import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function ThermalBottomHero() {
  const t = await getTranslations();

  return (
    <div className="w-full bg-black my-[100px] xl:my-[300px]">
      <div className="content-container flex flex-col items-center justify-center text-center px-4">
        <p className="text-white font-pretendard text-[18px] xl:text-[50px] mb-10 font-semibold">
          {t("common.thermal-bottom")}
        </p>
        <Link
          href="/about-us"
          className="bg-[#FFD900] text-black font-pretendard px-0 xl:px-20 py-2 xl:py-4 text-[17px] xl:text-[35px] xl:w-auto w-full justify-center font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
        >
          {t("menu.about-us2")} <span className="ml-2 text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}
