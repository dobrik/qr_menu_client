import { Catalog, Preview } from "./section";

export const Menu = ({categoryData}) => {
  return (
    <>
      <Preview categoryData={categoryData} />
      <Catalog category={categoryData} />
    </>
  );
};
