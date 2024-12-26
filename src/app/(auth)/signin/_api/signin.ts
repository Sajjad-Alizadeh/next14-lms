import {SignIn} from "@/app/(auth)/signin/types/signin.types";
import {createData} from "@/core/http-service/http-service";
import {useMutation} from "@tanstack/react-query";

const signIn = (model: SignIn): Promise<void> => createData<SignIn, void>("/signin", model);

type UseSignInOptions = {
  onSuccess?: () => void;
}

export const useSignIn = ({onSuccess}: UseSignInOptions) => {
  const {mutate: submit, isPending} = useMutation({
    mutationFn: signIn,
    onSuccess: onSuccess
  })

  return {submit, isPending}
}