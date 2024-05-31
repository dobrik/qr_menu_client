import { Container, Image, Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Preview = () => {
  const t = useTranslation();

  return (
    <section className="preview stack column">
      <Image
        className="preview__bg"
        src="/img/menu/menu-bg.png"
        width="1920"
        height="500"
        alt="Hero background"
      />
      <Container>
        <div className="preview__wrapper stack align-center justify-center">
          <Typography tag="h1" variant="h1" weight="900" center>
            {t.title.different}
          </Typography>
        </div>
      </Container>
    </section>
  );
};
