'use client';

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { GoGlobe } from "react-icons/go";

export default function LanguageButton() {
  const locale = useLocale();
  const path = usePathname();

  return (
    <Link className="flex flex-row items-center text-white ms-10 cursor-pointer" href={path} locale={locale === 'en' ? 'ko' : 'en'}>
      <span className="text-[20px] me-3">
        <GoGlobe />
      </span>
      <span className="font-pretendard text-[20px] font-normal">{locale === "ko" ? "ko" : "en"}</span>
      <span className="mx-2 font-normal text-gray-600">|</span>
      <span className="font-pretendard text-[20px] font-normal text-gray-600">{locale === "ko" ? "en" : "ko"}</span>
    </Link>
  );
}