import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

type TextboxType = "text" | "number" | "email" | "password";

export type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & ComponentBase & { // Omit size. because we want to access my own size type (that comes from ComponentBase file)
  type?: TextboxType
}