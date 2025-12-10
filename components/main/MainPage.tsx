"use client";

import AOSInitProvider from '@/components/AOSInitProvider';
import { useTranslations } from "next-intl";

function ContentSection() {
    // const t = useTranslations("Main.MainPage");

    return (
        <div className="content-container">
            메인페이지
        </div>
    );
}

export default function MainPage() {
    return (
        <AOSInitProvider>
            <ContentSection />
        </AOSInitProvider>
    );
}
