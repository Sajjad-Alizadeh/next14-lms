'use server'

import {redirect} from "next/navigation";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";

export async function signInAction(formState: { message: string }, formData: FormData) {
  const mobile = formData.get('mobile')
  const validatedData = signInSchema.safeParse({
    mobile
  })

  if (validatedData.success) {
    try { // Just for test
      throw 'خطا در برقراری ارتباط با سرور'
    } catch (e) {
      return {
        message: e as string
      }
    }
  } else {
    return {
      message: 'خطا در فرمت موبایل'
    }
  }

}