"use client";
import { SupportedLanguages } from "@/types/types";
import { usePathname } from "@/i18n/routing";

export default function LanguageChangeButton({locale, className, children} : {locale: SupportedLanguages, className?: string, children?: React.ReactNode}) {
    const pathname = usePathname();
    const targetLocale = locale === 'ko' ? 'en' : 'ko';
    // 시작하는 루트만 변경
    const newPathname = `/${targetLocale}${pathname}`;

    return (
        <a 
            className={`${className}`}
            href={newPathname}>
                
            {children}
        </a>
    );
}