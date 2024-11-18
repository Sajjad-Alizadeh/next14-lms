import {FC} from "react";
import {PriceProps} from "@/app/_components/price/price.types";
import {Badge} from "@/app/_components/badge";
import {Size} from "@/app/_components/types/size.type";
import {IconToman} from "@/app/_components/icons";

const sizeClasses: Record<Size, { textSize: string, svgSize: number }> = {
  tiny: {textSize: 'text-md', svgSize: 16},
  small: {textSize: 'text-xl', svgSize: 18},
  normal: {textSize: 'text-2xl', svgSize: 20},
  large: {textSize: 'text-3xl', svgSize: 22},
}

export const Price: FC<PriceProps> = ({price, text = 'رایگان', size = 'normal', className}) => {
  const svgSize = sizeClasses[size].svgSize

  return (
    <>
      {
        price != null && price > 0 ?
          <span
            className={`flex items-center font-bold gap-1 dark:text-white/90 ${sizeClasses[size].textSize} ${className}`}>
            {price.toLocaleString()}
            <IconToman strokeWidth={1} viewBox={"0 0 16 16"} width={svgSize} height={svgSize}/>
          </span>
          :
          <Badge variant={'success'}>{text}</Badge>
      }
    </>
  )
}