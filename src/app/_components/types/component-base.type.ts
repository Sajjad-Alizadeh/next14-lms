import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBase = {
  isDisabled?: boolean;
  classname?: string;
  size?: Size;
  variant?: Variant;
};
