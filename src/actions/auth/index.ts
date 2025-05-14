'use server'

import {OperationResult} from "@/types/operation-result";
import {serverActionWrapper} from "@/actions/server-action-wrapper";
import {createData} from "@/core/http-service/http-service";
import {SignIn} from "@/app/(auth)/signin/_types/signin.types";
import {SendAuthCode, VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {AuthorizeError, signIn, signOut} from "../../../auth";

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

export async function sendAuthCode(
  formState: OperationResult<string> | null,
  mobile: string
) {
  return serverActionWrapper(async () =>
    await createData<SendAuthCode, string>("/send-auth-code", {mobile})
  )
}

export async function verify(prevState: OperationResult<void> | unknown, model: VerifyUserModel) {
  try {
    await signIn("credentials", {
      username: model.username,
      code: model.code,
      redirect: false // disable session auto update (because I want to manually redirect to a new page)
    })
    return {
      isSuccess: true
    } satisfies OperationResult<void>
  } catch (e) {
    if (e instanceof AuthorizeError) {
      return {
        isSuccess: false,
        error: e.problem
      } satisfies OperationResult<void>
    }
    throw new Error('')
  }
}

export async function logout(prevState: OperationResult<void> | undefined) {
  try {
    await signOut({redirect: false})

    return {
      isSuccess: true
    } satisfies OperationResult<void>

  } catch (e) {
    throw new Error('')
  }
}