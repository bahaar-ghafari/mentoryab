'use client';

import { useTranslation } from "react-i18next";
import "../../lib/i18n";
import { useEffect, useState } from 'react';
import Input from "@/components/atoms/Input";

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


  console.log("lang:", i18n.language);

  const handleSearch = (value: string) => {
    console.log("Search input:", value);
  };
  console.log(t("app_title"));

  return (
    <div
      dir={direction}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">{t("app_title")}</h1>
      <Input
        onChange={(e) => console.log(e.target.value)}
      />

    </div>
  );
}
