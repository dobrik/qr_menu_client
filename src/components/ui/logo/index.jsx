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
        <img src={src} width="" height="" alt="" loading="" />
      </Link>
    </div>
  );
};
