export const LineWrapper = (props) => {
  //**props
  const { children } = props;

  return <div className="line-wrapper stack align-center">{children}</div>;
};
