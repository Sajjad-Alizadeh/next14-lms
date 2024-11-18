import {ComponentBase} from "@/app/_components/types/component-base.type";

export type PriceProps = Omit<ComponentBase, 'isDisabled' | 'variant'> & {
  price?: number
  text?: string
}