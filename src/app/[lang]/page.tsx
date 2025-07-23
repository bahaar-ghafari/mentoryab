/** @format */

"use client";

import { useTranslation } from "react-i18next";
import CustomButton from "@/components/atoms/Button";
import { useLanguageSync } from "@/hooks/useLanguageSync";

export default function Home({ params }: { params: { lng: string } }) {
  const { t } = useTranslation();
  const direction = params.lng === "fa" ? "rtl" : "ltr";
  const ready = useLanguageSync(params.lng);
  if (!ready) return null;
  return (
    <div
      dir={direction}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      <h1 className="text-3xl font-bold">{t("app_title")}</h1>
      <CustomButton variant="solid">Default solid</CustomButton>
    </div>
  );
}
