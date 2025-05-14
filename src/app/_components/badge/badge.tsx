import {FC} from "react";
import {BadgeProps} from "@/app/_components/badge/badge.types";
import classNames from "classnames";
import {Size} from "@/app/_components/types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  large: "badge-lg",
  normal: "badge-md",
};

export const Badge: FC<BadgeProps> = ({variant, className, size = 'tiny', children}) => {
  const classes = classNames("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size
  })

  return (
    <span className={classes}>
      {children}
    </span>
  )
}