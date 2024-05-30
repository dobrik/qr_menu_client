import { useRouter } from "next/router";

import { translations } from "@utils";

export const useTranslation = () => {
  const { locale, defaultLocale } = useRouter();

  const currentT =
    locale && Object.prototype.hasOwnProperty.call(translations, locale)
      ? translations[locale]
      : translations[defaultLocale];

  return currentT;
};
