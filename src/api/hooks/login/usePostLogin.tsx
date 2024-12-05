import { useMutation } from "@tanstack/react-query";
import { postLogin } from "@api/loginAPI";
import { LoginParams } from "@api/types/member";

const usePostLogin = () => {
  return useMutation({
    mutationFn: (params: LoginParams) => postLogin(params),
  });
};

export default usePostLogin;
