'use server'

import {OperationResult} from "@/types/operation-result";
import {serverActionWrapper} from "@/actions/server-action-wrapper";
import {createData} from "@/core/http-service/http-service";
import {SignIn} from "@/app/(auth)/signin/_types/signin.types";

export async function signInAction(
  formState: OperationResult<string> | null,
  formData: FormData
) {
  const mobile = formData.get('mobile') as string

  return serverActionWrapper(async () =>
    await createData<SignIn, string>("/signin", {
      mobile
    })
  )

  // const validatedData = signInSchema.safeParse({
  //   mobile
  // })

  // if (validatedData.success) {

  // } else {
  // return {
  //   message: 'خطا در فرمت موبایل'
  // }
  // }

}