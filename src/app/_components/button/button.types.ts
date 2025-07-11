import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";
import { LoadingBehavior } from "../types/loading-behavior.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
    isOutline?: boolean;
  };

export type ButtonShape = "default" | "wide" | "square" | "full";
