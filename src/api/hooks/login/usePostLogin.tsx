import { useMutation } from "@tanstack/react-query";
import { postLogin } from "@api/loginAPI";
import { LoginParams } from "@api/types/member";

const usePostLogin = () => {
  return useMutation({
    mutationFn: (params: LoginParams) => postLogin(params),
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem("accessToken", data.token);
      }
    }
  });
};

export default usePostLogin;
