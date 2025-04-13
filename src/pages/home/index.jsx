import {Categories, Hero, Info} from "./sections";

export const Home = ({categories}) => {
  return (
    <>
      <Hero />
      <Categories categories={categories}></Categories>
      <Info />
    </>
  );
};
