/** @format */

import { useEffect, useState } from "react";
import i18n from "../lib/i18n";

export function useLanguageSync(lang: string) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const changeLang = async () => {
      if (i18n.language !== lang) {
        await i18n.changeLanguage(lang);
      }
      setReady(true);
    };
    changeLang();
  }, [lang]);
  return ready;
}
