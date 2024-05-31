import { Image, LikesButton, Typography } from "@components/ui";
import Link from "next/link";

export const MenuCard = (props) => {
  //props
  const { newFood, src, name, description, price, weight, rating, id } = props;

  return (
    <div className="menu-card">
      <div className="menu-card__image">
        <LikesButton className="menu-card__likes" />
        <Link className="menu-card__link" href={`/${id}`}>
          <div className="menu-card__poster">
            <Image src={src} width="200" height="200" alt="Menu card" />
            {newFood ? (
              <div className="menu-card__new">
                <span>NEW</span>
              </div>
            ) : null}
          </div>
        </Link>
      </div>

      <Link className="menu-card__link" href={`/${id}`}>
        <div className="menu-card__content stack column justify-space-between">
          <div className="menu-card__text stack column">
            <Typography tag="h4" variant="h4" weight="700">
              {name}
            </Typography>
            <Typography tag="p" variant="p" color="dark">
              {description}
            </Typography>
          </div>
          <div className="menu-card__info stack align-center justify-space-between">
            <Typography className="menu-card__price" tag="span" color="dark">
              {price} ₴
            </Typography>
            <Typography className="menu-card__price" tag="span" color="dark">
              {weight} kg
            </Typography>
            <div className="menu-card__rating stack align-center">
              <Image
                src="/img/ui/star.svg"
                width="15"
                height="15"
                alt="Rating Star"
              />
              <Typography className="" tag="span" variant="p">
                {rating}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
