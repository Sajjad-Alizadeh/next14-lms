"use client";

import { Loading } from "../loading";
import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  large: "btn-lg",
  normal: "",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  square: "btn-square",
  full: "btn-full",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست...",
  className,
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    className,
    "btn",
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [sizeClasses[size]]: size },
    { [shapeClasses[shape]]: shape }
  );

  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};
