import { useTranslation } from "@hooks";

export const Hero = () => {
  const t = useTranslation();

  return <p>{t.title.hello}</p>;
};
