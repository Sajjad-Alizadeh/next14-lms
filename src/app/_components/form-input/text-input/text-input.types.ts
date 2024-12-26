import {DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister} from "react-hook-form";
import {TextboxProps} from "@/app/_components/textbox/textbox.types";

export type TextInputProps<TFormValues extends FieldValues> = Omit<TextboxProps, 'name'> & {
  register: UseFormRegister<TFormValues>,
  name: Path<TFormValues>,
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>,
  errors: Partial<DeepMap<TFormValues, FieldError>> // The Partial type make all field optional
}