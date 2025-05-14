"use client";

import {getSession, useSession} from "next-auth/react";
import Link from "next/link";
import {useFormState, useFormStatus} from "react-dom"
import {Loading} from "@/app/_components/loading";
import {logout} from "@/actions/auth";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const HeaderUserSection = () => {
  const {data: session} = useSession()
  const router = useRouter()
  const [logoutState, action] = useFormState(logout, undefined)

  useEffect(() => {
    if (logoutState?.isSuccess) {
      // don't forget to update session, because we disabled auto update feature
      const fetchSession = async () => await getSession()
      fetchSession()
      router.push('/')
    }
  }, [router, logoutState]);

  return (
    <>
      {
        session?.user ?
          <>
            <p>{session.user.mobile}</p>
            <form action={action}>
              <LogoutButton/>
            </form>
          </>
          :
          <Link href="/signin">ورود یا ثبت نام</Link>
      }
    </>
  )
}

const LogoutButton = () => { // Note: we put Logout button into new component to access the useFormStatus hook
  const {pending} = useFormStatus()

  return (
    <button className='text-error'>
      خروج از حساب کاربری
      {pending && <Loading size='tiny'/>}
    </button>
  )
}

export default HeaderUserSection