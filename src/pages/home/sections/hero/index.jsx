import { Container, Image } from "@components/ui";
import { useTranslation } from "@hooks";

export const Hero = ({menuData}) => {
  const t = useTranslation();

  return (
    <section className="hero">
      { menuData.image && (
        <Image
          className="hero__bg"
          src={menuData.image}
          width="1920"
          height="500"
          alt={menuData.title}
        />
      )}

      <Container>
        <div className="hero__wrapper"></div>
      </Container>
    </section>
  );
};
