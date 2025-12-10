import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import "@/app/globals.css";
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/footer/Footer';
import TopBar from '@/components/nav/TopBar';

export const metadata: Metadata = {
    title: "jk-glotech",
    description: "jk-glotech Web",
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

/**
 * [locale] 을 ko/ en/ 별로 SSR 대신 SSG를 강제하는 코드
 * 이 코드는 여기에만 넣으면 알아서 하위 페이지에도 적용됨
 */
export function generateStaticParams() {
    // locales = ['en', 'ko']
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <NextIntlClientProvider>
                <body className="antialiased flex flex-col min-h-screen bg-[#000000] text-white">
                    <TopBar pathname=''/>
                    <main className="grow pt-[100px]">
                        {children}
                    </main>
                    <Footer />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
