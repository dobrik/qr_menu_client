import { Footer, Header } from "@components/sections";

export const MainLayuot = (props) => {
  const { overflow = true, children, className = "" } = props;

  return (
    <div className={overflow ? "wrapper overflow" : "wrapper"}>
      <Header />
      <main>{children}</main>
      <Footer className={className} />
    </div>
  );
};
