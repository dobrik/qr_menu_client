import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="footer stack align-center">
      <Container>
        <div className="footer__wrapper">
          <Typography className="footer__text" tag="p" weight="900" center>
            {t.common.powered}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
