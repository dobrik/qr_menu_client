import {Categories, Hero, Info} from "./sections";
import {Container} from "@components/ui";

export const Home = ({menuData}) => {
  return (
    <>
      <Hero/>

      <div className={'container home_info__container'}>
        <Categories categories={menuData.categories}></Categories>
        <Info menuData={menuData}/>
      </div>
    </>
  );
};
