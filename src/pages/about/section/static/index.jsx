import { Image } from "@components/ui";
import { useTranslation } from "@hooks";

export const Static = () => {
  const t = useTranslation();

  return (
    <section className="static">
      <div>
        <h1>{t.title.statich1}</h1>
        <p>{t.subtitle.about}</p>
      </div>
      <div>
        <h2>{t.title.statich2}</h2>
        <p>{t.subtitle.about}</p>
      </div>
      <div>
        <h3>{t.title.statich3}</h3>
        <p>{t.subtitle.about}</p>
      </div>
      <Image src="/img/about/about.jpg" width="800" height="425" alt="Dish" />
      <div>
        <h4>{t.title.statich4}</h4>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div>
    </section>
  );
};
