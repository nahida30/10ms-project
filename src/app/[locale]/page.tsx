'use client'; // enables hooks

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home'); // 'Home' is the namespace

  return (
    <main>
      <h1>{t('welcomeMessage')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
