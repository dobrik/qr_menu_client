import Link from "next/link";
import { useTransition } from "react";

export const Logo = (props) => {
  //props
  const { src, className } = props;

  const t = useTransition();

  const logoClassName = className ? `logo ${className}` : "logo";

  return (
    <div className={logoClassName}>
      <Link href="/">
        <img src={src} width="150" height="40" alt="Logotype" loading="eager" />
      </Link>
    </div>
  );
};
