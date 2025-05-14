import {ComponentBase} from "@/app/_components/types/component-base.type";

export type AvatarProps = Omit<ComponentBase, 'isDisabled'> & {
  src?: string
  alt?: string
}