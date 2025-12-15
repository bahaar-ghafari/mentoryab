'use client';

import { useTranslation } from 'react-i18next';
import '../../lib/i18n';
import { useEffect, useState } from 'react';
import { Image } from '@/components/atoms/image/Image';

export default function Home({ params }: { params: { lng: string } }) {
  const { t, i18n } = useTranslation();
  const [ready, setReady] = useState(false);
  const direction = params.lng === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    const changeLang = async () => {
      if (i18n.language !== params.lng) {
        await i18n.changeLanguage(params.lng);
      }
      setReady(true);
    };
    changeLang();
  }, [params.lng, i18n]);

  if (!ready) return null;

  console.log('lang:', i18n.language);

  return (
    <div
      dir={direction}
      className="grid min-h-screen min-w-screen justify-center p-8"
    >
      <h1 className="text-3xl font-bold text-center">{t('app_title')}</h1>
      <Image
        src="/Image2.png"
        alt="test image"
        className="h-[200px] w-[600px] rounded-2xl"
      />
    </div>
  );
}
