import sprite from "icons/icon-sprites.svg";

const COLORS = {
  dark: "#111212",
  blue: "#4788F5",
  deepBlue: "#3070DD",
  special: "#D476F8",
  red: "#EB5757",
  deepRed: "#DB3C3C",
  white: "#FFFFFF",
  grey700: "#4F4F4F",
  grey600: "#828282",
  grey500: "#BDBDBD",
  grey400: "#E0E0E0",
  grey300: "#EBEBEB",
  grey200: "#F2F2F2",
  grey100: "#F8F8F8",
};

type IconName = "cart" | "logo";

type Props = {
  name: IconName;
  className?: string;
  color?: string;
  dataTest?: string;
  size?: number;
};

export const Icon = ({ name, className, color, size, dataTest }: Props) => {
  const rgbFrom = (color: string) => COLORS[color as keyof typeof COLORS] || color;

  const baseClassName = `icon-${name}`;
  const classes = [`icon ${baseClassName}`, className];

  const style = {
    fill: color ? rgbFrom(color) : undefined,
    width: size,
    height: size,
  };

  return (
    <svg className={classes.join(" ")} data-test={dataTest} style={style}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};
