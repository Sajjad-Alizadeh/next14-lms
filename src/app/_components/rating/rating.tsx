import {RatingProps} from "@/app/_components/rating/rating.types";
import {FC} from "react";
import {IconStar} from "@/app/_components/icons";
import {Size} from "@/app/_components/types/size.type";

const sizeClasses: Record<Size, number> = {
  tiny: 14,
  small: 18,
  normal: 24,
  large: 30,
};

export const Rating: FC<RatingProps> = ({rate, className, variant = "warning", size = "normal"}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {
        [1, 2, 3, 4, 5].map((value) => (
          <IconStar
          key={`star-${value}`}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          fill={rate >= value ? `var(--color-${variant})` : ''}
          color={rate >= value ? `var(--color-${variant})` : 'currentColor'}
          />
        ))
      }
    </div>
  )
}