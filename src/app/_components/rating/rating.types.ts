import {ComponentBase} from "@/app/_components/types/component-base.type";

export type RatingProps = Omit<ComponentBase, 'isDisabled'> & {
  rate: number
}