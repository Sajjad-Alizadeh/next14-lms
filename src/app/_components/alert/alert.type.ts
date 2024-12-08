import {ComponentBase} from "@/app/_components/types/component-base.type";
import {ReactNode} from "react";

export type AlertProps = Omit<ComponentBase, 'size' | 'isDisabled'> & {
  showIcon?: boolean;
  children: ReactNode
}