export const Image = (props) => {
  //Props
  const {
    src,
    loading = "lazy",
    alt = "",
    ariaHidden = false,
    width,
    className,
    height,
  } = props;

  return (
    <img
      className={className}
      src={src}
      loading={loading}
      alt={alt}
      {...(ariaHidden ? { "aria-hidden": "true" } : {})}
      width={width}
      height={height}
    />
  );
};
