export const Typography = (props) => {
  // **Props
  const {
    tag,
    weight,
    color,
    className,
    variant,
    upperCase,
    center,
    dangerouslySetInnerHTML,
    children,
    ...rest
  } = props;

  const Tag = tag || "div";

  const getClasses = () => {
    let classes = className ? `typography ${className}` : "typography";

    const VARIANT = {
      h1: " h1",
      h2: " h2",
      h3: " h3",
      h4: " h4",
      p: " p",
    };

    const WEIGHT = {
      400: " w-400",
      600: " w-600",
      700: " w-700",
    };

    const COLOR = {
      black: " black",
      light: " light",
      error: " error",
    };

    classes += variant ? VARIANT?.[variant] : "";
    classes += weight ? WEIGHT?.[weight] : "";
    classes += color ? COLOR?.[color] : "";

    if (typeof upperCase === "boolean") {
      classes += " text-uppercase";
    }

    if (typeof center === "boolean") {
      classes += " text-center";
    }

    return classes;
  };

  return (
    <Tag className={getClasses()} {...rest}>
      {children}
    </Tag>
  );
};
