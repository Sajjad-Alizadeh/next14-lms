"use client";

import AuthCode from "@/app/_components/auth-code/auth-code";
import {AuthCodeRef} from "@/app/_components/auth-code/auth-code.types";
import {Button} from "@/app/_components/button/button";
import Link from "next/link";
import {useEffect, useRef, useState, useTransition} from "react";
import {Timer} from "@/app/_components/timer/timer";
import {TimerRef} from "@/app/_components/timer/timer.types";
import {useForm} from "react-hook-form";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {useNotificationStore} from "@/stores/notification.store";
import {useRouter, useSearchParams} from "next/navigation";
import {useFormState} from "react-dom";
import {sendAuthCode, verify} from "@/actions/auth";
import {getSession} from "next-auth/react";

const getTwoMinutesFromNow = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5); // change it to 120
  return time;
};

const VerificationForm = ({mobile}: { mobile: string }) => {
  const [showResendCode, setShowResendCode] = useState<boolean>(false);
  const authCodeRef = useRef<AuthCodeRef>(null);
  const timerRef = useRef<TimerRef>(null);

  const router = useRouter()

  const [sendAuthCodeState, sendAuthCodeAction] = useFormState(sendAuthCode, null)
  const [verifyState, verifyAction] = useFormState(verify, undefined)
  const [verifyPendingState, startTransition] = useTransition()

  const {handleSubmit, setValue, register, formState: {isValid}} = useForm<VerifyUserModel>();

  const showNotification = useNotificationStore(state => state.showNotification);

  const params = useSearchParams();
  const username = params.get('mobile')!;

  useEffect(()=>{
    if (sendAuthCodeState && !sendAuthCodeState.isSuccess && sendAuthCodeState.error) {
      showNotification({
        type: 'error',
        message: sendAuthCodeState.error.detail!
      })
    } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
      showNotification({
        type: 'info',
        message: 'کد تایید به شماره شما ارسال شد'
      })
      console.log(sendAuthCodeState.response)
    }
  }, [showNotification, sendAuthCodeState])

  useEffect(() => {
    if (verifyState && !verifyState.isSuccess && verifyState.error.detail) {
      showNotification({
        message: verifyState.error.detail,
        type: 'error'
      })
    } else if (verifyState?.isSuccess) {
      // don't forget to update session, because we disabled auto update feature
      const fetchSession = async () => await getSession()
      fetchSession()
      router.push('/student/courses')
    }
  }, [verifyState, showNotification]);

  const onSubmit = (data: VerifyUserModel) => {
    data.username = username;

    startTransition(async ()=>{
      verifyAction({
        username: data.username,
        code: data.code
      })
    })
  }

  register('code', {
    validate: (value: string) => (value ?? "").length === 5
  })

  const resendAuthCode = () => {
    timerRef.current?.restart(getTwoMinutesFromNow());
    setShowResendCode(false);
    sendAuthCodeAction(mobile)
    authCodeRef.current?.clear();
  }

  return (
    <>
      <h5 className="text-2xl">کد تایید</h5>
      <p className="mt-2">
        دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-10 flex-1">
        <AuthCode
          className="mt-10"
          ref={authCodeRef}
          onChange={(value) => {
            setValue('code', value, {shouldValidate: true})
          }}
        />
        <Timer ref={timerRef} className="my-8" size="small" onExpire={()=> {setShowResendCode(true)}} expiryTimestamp={getTwoMinutesFromNow()} showDays={false} showHours={false}/>

        <Button isLink={true} isDisabled={!showResendCode} onClick={resendAuthCode}>ارسال مجدد کد تایید</Button>
        <Button type="submit" variant="primary" isLoading={verifyPendingState} isDisabled={!isValid}>
          تایید و ادامه
        </Button>
        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>برای اصلاح شماره موبایل</span>
          <Link href="/signin">اینجا</Link>
          <span>کلیک کنید</span>
        </div>
      </form>
    </>
  );
};

export default VerificationForm;