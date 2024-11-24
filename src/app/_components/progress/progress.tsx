import {FC} from "react";
import {ProgressProps} from "@/app/_components/progress/progress-types";
import {Size} from "@/app/_components/types/size.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

export const Progress: FC<ProgressProps> = ({variant = 'neutral', className, size = "small", value}) => {
  const classes = classNames("progress", className, {
    [`progress-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return(
    <progress value={value} max={"100"} className={classes}/>
  )
}