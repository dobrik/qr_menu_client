import * as components from "./components";

const createTranslation = (locale) =>
  Object.entries(components)?.reduce((acc, [key, value]) => {
    acc[key] = value[locale];
    return acc;
  }, {});

export const translations = {
  en: createTranslation("en"),
  ru: createTranslation("ru"),
  uk: createTranslation("uk"),
};
