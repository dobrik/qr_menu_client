import { useState } from "react";
import { Typography } from "..";
import Link from "next/link";

export const HorizontalItem = (props) => {
  //**props
  const { name, href } = props;

  return (
    <Link className={`horizontal-item stack center `} href={href}>
      <Typography
        className="horizontal-item__text"
        tag="p"
        variant="p"
        weight="900"
      >
        {name}
      </Typography>
    </Link>
  );
};
