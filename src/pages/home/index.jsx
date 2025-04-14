import {Categories, Hero, Info} from "./sections";
import {Container} from "@components/ui";

export const Home = ({menuData}) => {
  return (
    <>
      <Hero/>

      <Container>
        <Categories categories={menuData.categories}></Categories>
        <Info menuData={menuData}/>
      </Container>
    </>
  );
};
