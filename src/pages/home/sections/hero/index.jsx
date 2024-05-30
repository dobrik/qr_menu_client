import { Container, Image } from "@components/ui";
import { useTranslation } from "@hooks";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Image
        className="hero__bg"
        src="img/hero/hero-bg.png"
        width="1920"
        height="500"
        alt="Hero background"
      />
      <Container>
        <div className="hero__wrapper"></div>
      </Container>
    </section>
  );
};
