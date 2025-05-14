import { ComponentBase } from "../types/component-base.type";

// Use Omit to access all the data that is inside ComponentBase type, Apart from isDisabled

export type LoadingProps = Omit<ComponentBase, "isDisabled"> & {
  type?: "spinner" | "ring";
};
