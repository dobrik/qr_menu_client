import {Categories, Hero, Info} from "./sections";

export const Home = ({menuData}) => {
  return (
    <>
      <Hero menuData={menuData}/>

      <div className={'container home_info__container'}>
        <Categories categories={menuData.categories}></Categories>
        <Info menuData={menuData}/>
      </div>
    </>
  );
};
