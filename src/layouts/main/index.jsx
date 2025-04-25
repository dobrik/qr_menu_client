import { Footer, Header } from "@components/sections";

export const MainLayout = (props) => {
  const { overflow = true, children, className = "", menuData } = props;

  return (
    <div className={overflow ? "wrapper overflow" : "wrapper"}>
      <Header menuData={menuData} />
      <main>{children}</main>
      <Footer className={className} />
    </div>
  );
};
