import {FC} from "react";
import {AlertProps} from "@/app/_components/alert/alert.type";
import classNames from "classnames";
import {IconInfo} from "@/app/_components/icons";

export const Alert: FC<AlertProps> = ({
                                        variant,
                                        className,
                                        showIcon = true,
                                        children,
                                      }) => {
  const classes = classNames(
    "alert",
    { [`alert-${variant}`]: variant },
    className
  );

  return (
    <div className={classes}>
      {showIcon && <IconInfo width={18} />}
      {children}
    </div>
  );
};