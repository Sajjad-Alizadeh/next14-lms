import {TextInputProps} from "@/app/_components/form-input/text-input/text-input.types";
import {FieldValues, get} from "react-hook-form";
import {Textbox} from "@/app/_components/textbox";

const TextInput = <TFormValues extends FieldValues>({
                                                      name,
                                                      register,
                                                      errors,
                                                      variant,
                                                      ...rest
                                                    }: TextInputProps<TFormValues>) => {
  const error = get(errors, name) // Get field error
  const hasError = !!error

  return (
    <>
      <Textbox
        {...register(name)}
        {...(hasError ? {variant: "error"} : {variant: variant})}
        {...rest}
      />
      {
        hasError && (
          <p className="text-sm text-error">
            {error.message}
          </p>
        )
      }
    </>
  )
}

export default TextInput