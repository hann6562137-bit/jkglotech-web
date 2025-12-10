import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import MainPage from '@/components/main/MainPage';

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  
  return (
    <MainPage />
  );
}
