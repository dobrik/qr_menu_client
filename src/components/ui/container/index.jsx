export const Container = (props) => {
  //**props
  const { children } = props;

  return <div className="container">{children}</div>;
};
