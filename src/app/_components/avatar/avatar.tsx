import {Size} from "@/app/_components/types/size.type";
import {FC} from "react";
import {AvatarProps} from "@/app/_components/avatar/avatar-types";
import classNames from "classnames";
import Image from "next/image";
import {IconUserProfile} from "@/app/_components/icons";

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};


export const Avatar: FC<AvatarProps> = ({
                                          variant = "primary",
                                          className,
                                          size = "normal",
                                          src,
                                          alt = "",
                                        }) => {
  const classes = classNames("avatar", className, {
    [`avatar-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return (
    <div
      style={{width: sizeClasses[size], height: sizeClasses[size]}}
      className={classes}
    >
      {src ? (
        <Image
          src={src}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          alt={alt}
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  )
}